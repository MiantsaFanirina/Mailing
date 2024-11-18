import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left px-12">
                <h1 class="text-5xl font-bold">Connexion à votre espace sécurisé</h1>
                <p class="py-6">
                    Accédez à votre tableau de bord pour gérer les courriers, suivre les livraisons et collaborer avec votre équipe. Connectez-vous pour une expérience simplifiée et organisée, adaptée à votre rôle.
                </p>
                <span className='text-sm'>Pas encore inscrit ? <Link to={"/register"} className='underline text-primary'>M'inscrire et créer mon entreprise 📝</Link></span>
            </div>
            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form class="card-body">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" class="input input-bordered" required />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Mot de passe</span>
                    </label>
                    <input type="password" placeholder="Mot de passe" class="input input-bordered" required />
                </div>
                <div class="form-control mt-6">
                    <Link to={'/mail'} class="btn btn-primary">Se connecter</Link>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage