import Stripe from "stripe";
import devenv from "dotenv";

devenv.config();

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
