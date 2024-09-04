import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { paymentMethod } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 750000, // $10 in cents
      currency: 'usd',
      payment_method: paymentMethod.id,
      confirm: true,
    });

    res.status(200).json({ success: true, paymentIntent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
