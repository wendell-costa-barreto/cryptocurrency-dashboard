// utils/portfolio.js
import { supabase } from '@/utils/supabase'

// Get all portfolios for current user
export const getUserPortfolios = async () => {
  const { data, error } = await supabase
    .from('portfolios')
    .select(`
      *,
      holdings (
        id,
        crypto_symbol,
        crypto_name,
        amount_owned,
        avg_buy_price,
        notes,
        created_at
      )
    `)
    .order('created_at', { ascending: false })

  return { data, error }
}

// Create new portfolio
export const createPortfolio = async (name, description = '', user_id) => {
  const { data, error } = await supabase
    .from('portfolios')
    .insert({
      name,
      description,
      user_id,
    })
    .select()
    .single();

  return { data, error };
};


// Add crypto holding to portfolio
export const addHolding = async (portfolioId, cryptoData) => {
  const { data, error } = await supabase
    .from('holdings')
    .insert({
      portfolio_id: portfolioId,
      crypto_symbol: cryptoData.symbol,
      crypto_name: cryptoData.name,
      amount_owned: cryptoData.amount,
      avg_buy_price: cryptoData.avgPrice || null,
      notes: cryptoData.notes || null
    })
    .select()
    .single()

  return { data, error }
}

// Update holding amount
export const updateHolding = async (holdingId, updates) => {
  const { data, error } = await supabase
    .from('holdings')
    .update(updates)
    .eq('id', holdingId)
    .select()
    .single()

  return { data, error }
}

// Delete holding
export const deleteHolding = async (holdingId) => {
  const { data, error } = await supabase
    .from('holdings')
    .delete()
    .eq('id', holdingId)

  return { data, error }
}

// Delete portfolio (cascades to holdings)
export const deletePortfolio = async (portfolioId) => {
  const { data, error } = await supabase
    .from('portfolios')
    .delete()
    .eq('id', portfolioId)

  return { data, error }
}

// Calculate portfolio value using current crypto prices
export const calculatePortfolioValue = async (holdings, cryptoPrices) => {
  let totalValue = 0
  const holdingsWithValue = holdings.map(holding => {
    const currentPrice = cryptoPrices[holding.crypto_symbol]?.current_price || 0
    const value = holding.amount_owned * currentPrice
    totalValue += value
    
    return {
      ...holding,
      current_price: currentPrice,
      current_value: value,
      profit_loss: holding.avg_buy_price 
        ? value - (holding.amount_owned * holding.avg_buy_price)
        : null
    }
  })

  return {
    holdings: holdingsWithValue,
    totalValue
  }
}