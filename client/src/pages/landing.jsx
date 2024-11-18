import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Gérez et suivez vos courriers efficacement.</h1>
                <p className="py-6">
                    Optimisez la gestion de vos courriers en entreprise grâce à notre plateforme intuitive. Suivez chaque envoi, affectez des facteurs, et assurez une livraison rapide et sécurisée. Que vous soyez administrateur, gérant ou facteur, notre solution est conçue pour répondre à vos besoins tout en simplifiant votre quotidien.
                </p>
                <Link to={"/Login"} className="btn btn-primary">👉 Se connecter et commencer dès maintenant</Link>
            </div>
        </div>
    </div>
  )
}

export default LandingPage