import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mail, Phone, MapPin, Quote } from "lucide-react";
import Image from "next/image";

export default function ChocogestionSite() {
  return (
    <div className="min-h-screen bg-[#f7f2ee] text-[#4e342e] p-6">
      <header className="text-center mb-12">
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/logo-chocogestion.png"
            alt="Logo Chocogestion"
            width={160}
            height={160}
            className="object-contain"
          />
          <h1 className="text-4xl font-bold">Chocogestion</h1>
          <p className="text-lg">Secrétariat indépendant pour chocolatiers</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4 text-sm text-[#6d4c41]">
            <div className="flex items-center gap-2">
              <MapPin size={16} /> Avenue de la Renaissance 1, 1000 BRUXELLES
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} /> 02 733 58 39
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} /> chocogestion@gmail.be
            </div>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Nos services</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Gestion administrative quotidienne</li>
              <li>Prise de rendez-vous et gestion d'agendas</li>
              <li>Suivi des commandes clients et fournisseurs</li>
              <li>Support comptable de base</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">À propos</h2>
            <p>
              Chocogestion offre des services de secrétariat indépendants dédiés aux chocolatiers. Grâce à notre expertise du secteur, nous vous aidons à gérer efficacement votre entreprise et à vous concentrer sur votre passion pour le chocolat.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Avis de nos clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <Quote className="mb-2" />
              <p>
                "Un service au top ! Grâce à Chocogestion, j’ai enfin pu me concentrer sur la création de mes pralines sans me soucier de la paperasse."
              </p>
              <p className="mt-4 text-sm text-right italic">— Isabelle M., chocolatière à Namur</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Quote className="mb-2" />
              <p>
                "Professionnels, réactifs et toujours à l’écoute. Leur aide dans la gestion des commandes a été précieuse."
              </p>
              <p className="mt-4 text-sm text-right italic">— Marc T., artisan chocolatier à Bruxelles</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Quote className="mb-2" />
              <p>
                "Une vraie bouffée d’air dans mon activité. Je recommande à tous les petits ateliers chocolatiers."
              </p>
              <p className="mt-4 text-sm text-right italic">— Sophie L., chocolatière indépendante à Liège</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contactez-nous</h2>
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-2">
            <MapPin /> <span>Avenue de la Renaissance 1, 1000 BRUXELLES</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone /> <span>02 733 58 39</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail /> <span>chocogestion@gmail.be</span>
          </div>
          <Button className="mt-4">Envoyer un message</Button>
        </div>
      </section>

      <footer className="text-center text-sm text-[#6d4c41]">
        © 2025 Chocogestion - Tous droits réservés
      </footer>
    </div>
  );
}
