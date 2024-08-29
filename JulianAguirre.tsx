import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPinIcon,
  MailIcon,
  PhoneIcon,
  GlobeIcon,
  BookOpenIcon,
  BriefcaseIcon,
  UserIcon,
} from "lucide-react";

export default function Component() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-24 w-24">
          <AvatarImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/julian%20perfil%20redondeado%20azul-ht0MUCppPCTZSKmu9RyJ897ckF95am.png"
            alt="Julián Aguirre"
          />
          <AvatarFallback>JA</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-2xl">Julián Aguirre</CardTitle>
          <div className="flex gap-2 mt-2">
            <Badge variant="secondary">32 años</Badge>
            <Badge variant="secondary">
              Diseñador Web Especializado en WordPress
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6">
        <section>
          <h3 className="font-semibold text-lg mb-2">
            Datos Básicos del Postulante
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-center">
              <MapPinIcon className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-sm">Corrientes, Argentina</span>
            </div>
            <div className="flex items-center">
              <MailIcon className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-sm">aguirrej513@gmail.com</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-sm">3773 467191</span>
            </div>
            <div className="flex items-center">
              <GlobeIcon className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-sm">julian-portfolio.com.ar</span>
            </div>
          </div>
        </section>

        <Separator />

        <section>
          <h3 className="font-semibold text-lg mb-2">Acerca de mí</h3>
          <p className="text-sm">
            Hola, soy Julián y tengo 32 años. Mi profesión de base es el
            periodismo, pero mi curiosidad por el mundo digital me llevó a
            consolidarme en el desarrollo de sitios web especializándome en
            WordPress. Cuento con gran capacidad creativa para la resolución de
            problemas en el ámbito de mi expertise. Soy metódico, responsable,
            orientado al detalle y comprometido con el desarrollo de tareas en
            equipo.
          </p>
        </section>

        <Separator />

        <section>
          <h3 className="font-semibold text-lg mb-2">Experiencia Laboral</h3>
          <ul className="list-disc list-inside text-sm space-y-4">
            <li>
              <span className="font-semibold">
                2022 - 2024: Guayku - Agencia de viajes (Área Marketing)
              </span>
              <p className="ml-5">
                Diseño y mantenimiento de sitios web. Analista funcional.
                Implementador WordPress. Redactor SEO para blogs. Diseño de
                landings pages enfocadas a ventas de paquetes turísticos.
                Creación, configuración y mantenimiento de correos corporativos.
                Experiencia en manejo Zoho One (CRM de ventas, creación de
                campos, módulos y formularios).
              </p>
            </li>
            <li>
              <span className="font-semibold">
                2020 - 2022: Diario El Libertador
              </span>
              <p className="ml-5">
                Trabajé como redactor digital y estuve a cargo de la sección
                Interior de la edición impresa. Colaboración en la creación y
                publicación de contenidos en las redes sociales (Instagram y
                Facebook).
              </p>
            </li>
          </ul>
        </section>

        <Separator />

        <section>
          <h3 className="font-semibold text-lg mb-2">Formación Profesional</h3>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>
              2020: Tecnicatura en Periodismo - Universidad Nacional del
              Nordeste.
            </li>
            <li>
              2019: Curso de Desarrollo Web con Wordpress - UTN Resistencia
              modalidad virtual.
            </li>
            <li>
              2019: Diseño Web Responsive HTML5 y CSS3 - UTN Resistencia
              modalidad virtual.
            </li>
            <li>
              2016: Curso de Periodismo Digital 2.0 y Redes Sociales. Facultad
              de Humanidades UNNE.
            </li>
          </ul>
        </section>

        <Separator />

        <section>
          <h3 className="font-semibold text-lg mb-2">Idiomas</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>Español (Nativo)</Badge>
            <Badge>Inglés Británico (Nivel B1)</Badge>
          </div>
        </section>

        <Separator />

        <section>
          <h3 className="font-semibold text-lg mb-2">Aptitudes</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Diseño web Responsive HTML5 y CSS3</Badge>
            <Badge variant="outline">
              Desarrollo web y administración de contenidos con el CMS WordPress
            </Badge>
            <Badge variant="outline">
              Redacción y edición de contenidos digitales
            </Badge>
            <Badge variant="outline">SEO</Badge>
            <Badge variant="outline">Manejo de redes sociales</Badge>
            <Badge variant="outline">Zoho One CRM</Badge>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
