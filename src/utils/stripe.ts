const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export async function getPriceStrFromProductId(
  productId: string,
): Promise<string> {
  const product = await stripe.products.retrieve(productId)
  console.log('product', product)
  const price = await stripe.prices.retrieve(product.default_price)
  console.log('price', price)
  const priceAmount = price.unit_amount
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(priceAmount / 100)
}
