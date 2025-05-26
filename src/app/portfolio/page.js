'use client'
import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabase'
import { useState, useEffect } from 'react'
import { useAuth } from '@/utils/auth'
import { getUserPortfolios, createPortfolio, deletePortfolio, addHolding, updateHolding, deleteHolding, calculatePortfolioValue } from '@/utils/portfolio'
import { Plus, Wallet, TrendingUp, DollarSign, LogOut, Edit3, Trash2, X, Check, ChevronDown, ChevronUp } from 'lucide-react'
import { redirect, usePathname } from 'next/navigation'


// Popular crypto options for the dropdown
const CRYPTO_OPTIONS = [
  { symbol: 'BTC', name: 'Bitcoin' },
  { symbol: 'ETH', name: 'Ethereum' },
  { symbol: 'ADA', name: 'Cardano' },
  { symbol: 'SOL', name: 'Solana' },
  { symbol: 'DOT', name: 'Polkadot' },
  { symbol: 'MATIC', name: 'Polygon' },
  { symbol: 'AVAX', name: 'Avalanche' },
  { symbol: 'LINK', name: 'Chainlink' },
  { symbol: 'UNI', name: 'Uniswap' },
  { symbol: 'ATOM', name: 'Cosmos' }
]

export default function PortfolioDashboard() {
  const { userCheck, loadingCheck } = useAuth();
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newPortfolioName, setNewPortfolioName] = useState('')
  const [cryptoPrices, setCryptoPrices] = useState({})
  const [totalValue, setTotalValue] = useState(0)
  const [expandedPortfolios, setExpandedPortfolios] = useState({})
    const router = useRouter()
  const { user, loading: authLoading } = useAuth()
  const [portfolios, setPortfolios] = useState([])
  const [loading, setLoading] = useState(true)


  const loadCryptoPrices = async () => {
    try {
      const cryptoIds = CRYPTO_OPTIONS.map(crypto => {
        const idMap = {
          'BTC': 'bitcoin',
          'ETH': 'ethereum', 
          'ADA': 'cardano',
          'SOL': 'solana',
          'DOT': 'polkadot',
          'MATIC': 'matic-network',
          'AVAX': 'avalanche-2',
          'LINK': 'chainlink',
          'UNI': 'uniswap',
          'ATOM': 'cosmos'
        }
        return idMap[crypto.symbol] || crypto.symbol.toLowerCase()
      }).join(',')

      const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoIds}&vs_currencies=usd`)
      const prices = await response.json()
      
      const formattedPrices = {}
      Object.entries(prices).forEach(([id, data]) => {
        const symbolMap = {
          'bitcoin': 'BTC',
          'ethereum': 'ETH',
          'cardano': 'ADA',
          'solana': 'SOL',
          'polkadot': 'DOT',
          'matic-network': 'MATIC',
          'avalanche-2': 'AVAX',
          'chainlink': 'LINK',
          'uniswap': 'UNI',
          'cosmos': 'ATOM'
        }
        const symbol = symbolMap[id] || id.toUpperCase()
        formattedPrices[symbol] = { current_price: data.usd || 0 }
      })
      
      setCryptoPrices(formattedPrices)
    } catch (error) {
      console.error('Failed to load prices:', error)
    }
  }

    const calculateTotalValue = (portfolioData) => {
    let total = 0
    portfolioData.forEach(portfolio => {
      portfolio.holdings?.forEach(holding => {
        const price = cryptoPrices[holding.crypto_symbol]?.current_price || 0
        total += holding.amount_owned * price
      })
    })
    setTotalValue(total)
  }

  const handleCreatePortfolio = async () => {
    if (!newPortfolioName.trim()) return

    const { data, error } = await createPortfolio(newPortfolioName, '', user.id)
    if (!error) {
      setPortfolios([data, ...portfolios])
      setNewPortfolioName('')
      setShowCreateForm(false)
      // Set new portfolio as expanded
      setExpandedPortfolios(prev => ({ ...prev, [data.id]: true }))
    } else {
      console.error('Error creating portfolio:', error.message)
    }
  }

  const handleDeletePortfolio = async (portfolioId) => {
    if (!confirm('Are you sure you want to delete this portfolio and all its holdings?')) return

    const { error } = await deletePortfolio(portfolioId)
    if (!error) {
      setPortfolios(portfolios.filter(p => p.id !== portfolioId))
      // Remove from expanded state
      const newExpanded = { ...expandedPortfolios }
      delete newExpanded[portfolioId]
      setExpandedPortfolios(newExpanded)
    } else {
      console.error('Error deleting portfolio:', error.message)
    }
  }

  const handleCryptoSelect = (crypto) => {
    setHoldingForm({
      ...holdingForm,
      crypto_symbol: crypto.symbol,
      crypto_name: crypto.name
    })
  }

  const handleAddHolding = async (portfolioId) => {
    if (!holdingForm.crypto_symbol || !holdingForm.amount_owned) return

    const cryptoData = {
      symbol: holdingForm.crypto_symbol,
      name: holdingForm.crypto_name,
      amount: parseFloat(holdingForm.amount_owned),
      avgPrice: holdingForm.avg_buy_price ? parseFloat(holdingForm.avg_buy_price) : null,
      notes: holdingForm.notes
    }

    const { data, error } = await addHolding(portfolioId, cryptoData)
    if (!error) {
      await loadPortfolios()
      resetHoldingForm()
      setShowAddHolding(null)
    } else {
      console.error('Error adding holding:', error.message)
    }
  }

  const handleUpdateHolding = async () => {
    if (!editingHolding || !holdingForm.amount_owned) return

    const updates = {
      amount_owned: parseFloat(holdingForm.amount_owned),
      avg_buy_price: holdingForm.avg_buy_price ? parseFloat(holdingForm.avg_buy_price) : null,
      notes: holdingForm.notes
    }

    const { data, error } = await updateHolding(editingHolding.id, updates)
    if (!error) {
      await loadPortfolios()
      resetHoldingForm()
      setEditingHolding(null)
    } else {
      console.error('Error updating holding:', error.message)
    }
  }

  const handleDeleteHolding = async (holdingId) => {
    if (!confirm('Are you sure you want to delete this holding?')) return

    const { error } = await deleteHolding(holdingId)
    if (!error) {
      await loadPortfolios()
    } else {
      console.error('Error deleting holding:', error.message)
    }
  }

  const resetHoldingForm = () => {
    setHoldingForm({
      crypto_symbol: '',
      crypto_name: '',
      amount_owned: '',
      avg_buy_price: '',
      notes: ''
    })
  }

  const startEditHolding = (holding) => {
    setEditingHolding(holding)
    setHoldingForm({
      crypto_symbol: holding.crypto_symbol,
      crypto_name: holding.crypto_name,
      amount_owned: holding.amount_owned.toString(),
      avg_buy_price: holding.avg_buy_price?.toString() || '',
      notes: holding.notes || ''
    })
  }

  const togglePortfolioExpansion = (portfolioId) => {
    setExpandedPortfolios(prev => ({
      ...prev,
      [portfolioId]: !prev[portfolioId]
    }))
  }

const handleSignOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error.message);
    } else {
      router.push('/login');
    }
  } catch (error) {
    console.error('Unexpected error during sign out:', error);
  }
};
  
  // Holding management states
  const [showAddHolding, setShowAddHolding] = useState(null) // portfolio ID
  const [editingHolding, setEditingHolding] = useState(null)
  const [holdingForm, setHoldingForm] = useState({
    crypto_symbol: '',
    crypto_name: '',
    amount_owned: '',
    avg_buy_price: '',
    notes: ''
  })



  useEffect(() => {
    if (user) {
      loadPortfolios()
      loadCryptoPrices()
    }
  }, [user])

  useEffect(() => {
    if (portfolios.length >= 0 && Object.keys(cryptoPrices).length > 0) {
      calculateTotalValue(portfolios)
    }
  }, [portfolios, cryptoPrices])

  // Redirect effect
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login')
    }
  }, [user, authLoading, router])

  const loadPortfolios = async () => {
    if (!user) return // Additional safeguard
    
    setLoading(true)
    const { data, error } = await getUserPortfolios()
    if (!error) {
      setPortfolios(data || [])
      const expandedState = {}
      data.forEach(p => {
        expandedState[p.id] = true
      })
      setExpandedPortfolios(expandedState)
    }
    setLoading(false)
  }

  // Load portfolios when user is available
  useEffect(() => {
    if (user) {
      loadPortfolios()
    }
  }, [user])

  // Combined loading state
  const isLoading = authLoading || loading

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-[#1a1333] to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading your portfolios...</div>
      </div>
    )
  }
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-[#1a1333] to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading your portfolios...</div>
      </div>
    )
  }

  if (loadingCheck && !userCheck){
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-[#1a1333] to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading your portfolios...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-[#1a1333] to-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Wallet className="h-8 w-8 text-purple-400" />
              <div>
                <h1 className="text-2xl font-bold">Crypto Portfolio</h1>
                <p className="text-gray-400 text-sm">Welcome back, {user?.email}</p>

              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-all"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Portfolio Value</p>
                <p className="text-3xl font-bold text-green-400">
                  ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-green-400" />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Portfolios</p>
                <p className="text-3xl font-bold text-blue-400">{portfolios.length}</p>
              </div>
              <Wallet className="h-8 w-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-pink-500/30 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Holdings</p>
                <p className="text-3xl font-bold text-purple-400">
                  {portfolios.reduce((acc, p) => acc + (p.holdings?.length || 0), 0)}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Create Portfolio Button */}
        <div className="mb-8">
          {!showCreateForm ? (
            <button
              onClick={() => setShowCreateForm(true)}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-semibold transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/20"
            >
              <Plus className="h-5 w-5" />
              <span>Create New Portfolio</span>
            </button>
          ) : (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-md">
              <h3 className="text-lg font-semibold mb-4">Create New Portfolio</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  value={newPortfolioName}
                  onChange={(e) => setNewPortfolioName(e.target.value)}
                  placeholder="Portfolio name (e.g., 'Main Bag', 'DeFi Holdings')"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="flex space-x-3">
                  <button
                    onClick={handleCreatePortfolio}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition-colors flex-1"
                  >
                    Create 
                  </button>
                  <button
                    onClick={() => {
                      setShowCreateForm(false)
                      setNewPortfolioName('')
                    }}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg font-medium transition-colors flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Add/Edit Holding Modal */}
        {(showAddHolding || editingHolding) && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 rounded-2xl p-6 w-full max-w-md border border-white/10 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">
                  {editingHolding ? 'Edit Holding' : 'Add New Holding'}
                </h3>
                <button
                  onClick={() => {
                    setShowAddHolding(null)
                    setEditingHolding(null)
                    resetHoldingForm()
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Crypto Selection */}
                {!editingHolding && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Cryptocurrency</label>
                    <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-2">
                      {CRYPTO_OPTIONS.map((crypto) => (
                        <button
                          key={crypto.symbol}
                          onClick={() => handleCryptoSelect(crypto)}
                          className={`p-3 rounded-lg text-left transition-all ${
                            holdingForm.crypto_symbol === crypto.symbol
                              ? 'bg-purple-600 border-purple-400'
                              : 'bg-white/5 border-white/10 hover:bg-white/10'
                          } border`}
                        >
                          <div className="font-medium">{crypto.symbol}</div>
                          <div className="text-xs text-gray-400">{crypto.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {editingHolding && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Cryptocurrency</label>
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="font-medium">{holdingForm.crypto_symbol}</div>
                      <div className="text-sm text-gray-400">{holdingForm.crypto_name}</div>
                    </div>
                  </div>
                )}

                {/* Amount */}
                <div>
                  <label className="block text-sm font-medium mb-2">Amount Owned</label>
                  <input
                    type="number"
                    step="any"
                    value={holdingForm.amount_owned}
                    onChange={(e) => setHoldingForm({...holdingForm, amount_owned: e.target.value})}
                    placeholder="0.0"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Average Buy Price */}
                <div>
                  <label className="block text-sm font-medium mb-2">Average Buy Price (Optional)</label>
                  <input
                    type="number"
                    step="any"
                    value={holdingForm.avg_buy_price}
                    onChange={(e) => setHoldingForm({...holdingForm, avg_buy_price: e.target.value})}
                    placeholder="0.00"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium mb-2">Notes (Optional)</label>
                  <textarea
                    value={holdingForm.notes}
                    onChange={(e) => setHoldingForm({...holdingForm, notes: e.target.value})}
                    placeholder="Add any notes about this holding..."
                    rows={3}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  />
                </div>

                {/* Buttons */}
                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={editingHolding ? handleUpdateHolding : () => handleAddHolding(showAddHolding)}
                    disabled={!holdingForm.crypto_symbol || !holdingForm.amount_owned}
                    className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    {editingHolding ? 'Update' : 'Add'} Holding
                  </button>
                  <button
                    onClick={() => {
                      setShowAddHolding(null)
                      setEditingHolding(null)
                      resetHoldingForm()
                    }}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg font-medium transition-colors flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Portfolios List */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-4 sm:flex flex-col space-y-4">
          {portfolios.map((portfolio) => {
            const portfolioValue = portfolio.holdings?.reduce((sum, holding) => {
              const price = cryptoPrices[holding.crypto_symbol]?.current_price || 0
              return sum + (holding.amount_owned * price)
            }, 0) || 0

            const isExpanded = expandedPortfolios[portfolio.id] !== false

            return (
              <div key={portfolio.id} className="w-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all overflow-hidden">
                {/* Portfolio Header */}
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => togglePortfolioExpansion(portfolio.id)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          togglePortfolioExpansion(portfolio.id)
                        }}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      </button>
                      <div>
                        <h3 className="text-xl font-semibold">{portfolio.name}</h3>
                        <p className="text-gray-400 text-sm">
                          {portfolio.holdings?.length || 0} holdings
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-lg font-bold text-green-400">
                          ${portfolioValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setShowAddHolding(portfolio.id)
                          }}
                          className="px-3 py-1 bg-purple-600/20 hover:bg-purple-600/30 rounded-lg transition-colors text-sm"
                        >
                          Add
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDeletePortfolio(portfolio.id)
                          }}
                          className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Portfolio Content */}
                {isExpanded && (
                  <div className="border-t border-white/10 p-6 pt-4">
                    {portfolio.holdings && portfolio.holdings.length > 0 ? (
                      <div className="space-y-4">
                        {portfolio.holdings.map((holding) => {
                          const currentPrice = cryptoPrices[holding.crypto_symbol]?.current_price || 0
                          const value = holding.amount_owned * currentPrice

                          return (
                            <div key={holding.id} className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="font-medium">{holding.crypto_symbol}</p>
                                    <p className="text-sm text-gray-400">{holding.crypto_name}</p>
                                  </div>
                                  <div className="flex space-x-2">
                                    <button
                                      onClick={() => startEditHolding(holding)}
                                      className="p-1 text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                      <Edit3 className="h-4 w-4" />
                                    </button>
                                    <button
                                      onClick={() => handleDeleteHolding(holding.id)}
                                      className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </button>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                  <div>
                                    <p className="text-sm text-gray-400">
                                      {holding.amount_owned.toLocaleString()} coins
                                    </p>
                                    {holding.avg_buy_price && (
                                      <p className="text-xs text-gray-500">
                                        Avg buy: ${holding.avg_buy_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 })}
                                      </p>
                                    )}
                                  </div>
                                  <div className="text-right">
                                    <p className="font-medium text-sm">
                                      ${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                      ${currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 })}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-400">
                        <Wallet className="h-12 w-12 mx-auto mb-3 opacity-50" />
                        <p>No holdings yet</p>
                        <button
                          onClick={() => setShowAddHolding(portfolio.id)}
                          className="mt-4 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 rounded-lg transition-colors text-sm"
                        >
                          Add your first crypto holding
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {portfolios.length === 0 && (
          <div className="text-center py-12">
            <Wallet className="h-16 w-16 mx-auto mb-4 text-gray-400 opacity-50" />
            <h3 className="text-2xl font-semibold mb-2">No Portfolios Yet</h3>
            <p className="text-gray-400 mb-6">Create your first portfolio to start tracking your crypto holdings! 📈</p>
            <button
              onClick={() => setShowCreateForm(true)}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-semibold transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/20 mx-auto"
            >
              <Plus className="h-5 w-5" />
              <span>Create Portfolio</span>
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
