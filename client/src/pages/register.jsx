import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
            <div class="text-center lg:text-left px-12">
                <h1 class="text-5xl font-bold">Créez votre compte administrateur et lancez votre entreprise</h1>
                <p class="py-6">
                    Bienvenue sur notre plateforme de gestion de courriers pour les entreprises. En tant qu'administrateur, créez votre entreprise et gérez vos gérants et facteurs pour optimiser chaque étape de la gestion et de la livraison de vos courriers. Prenez le contrôle dès maintenant.
                </p>
                <span className='text-sm'>Vous avez déjà un compte ? <Link to={"/login"} className='underline text-primary'>👉 Se connecter et commencer dès maintenant</Link></span>
            </div>
            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form class="card-body">
                
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Nom complet</span>
                    </label>
                    <input type="text" placeholder="John Doe" class="input input-bordered" required />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="Email" placeholder="Email" class="input input-bordered" required />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Mot de passe</span>
                    </label>
                    <input type="password" placeholder="Mot de passe" class="input input-bordered" required />
                </div>
                
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Nom de la société</span>
                    </label>
                    <input type="text" placeholder="Mon super courrier" class="input input-bordered" required />
                </div>
                <div class="form-control mt-6">
                    <Link to={'/mail'} class="btn btn-primary">S'inscrire</Link>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage