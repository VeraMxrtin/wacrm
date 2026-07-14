import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import {
  MessageSquare,
  Zap,
  Filter,
  Megaphone,
  Users,
  LayoutDashboard,
  ChevronRight,
  Star
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-border/40 bg-background/60 px-6 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="VeraFlow Logo" width={32} height={32} className="rounded-lg" />
          <span className="text-xl font-bold tracking-tight text-foreground font-sans">
            VeraFlow
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">
            Iniciar Sesión
          </Link>
          <a href="https://wa.me/51947082837" target="_blank" rel="noreferrer" className={buttonVariants({ size: "sm", className: "hidden sm:inline-flex" })}>
            Solicitar Demo
          </a>
        </div>
      </nav>

      <main className="flex flex-col pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/40 to-primary/10 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
          </div>
          <div className="mx-auto max-w-7xl py-24 sm:py-32 lg:pb-40">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
              <div className="text-center lg:col-span-5 lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                  Automatiza la atención de tus clientes desde WhatsApp con <span className="text-primary">VeraFlow</span>.
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground text-balance">
                  Centraliza conversaciones, automatiza respuestas y organiza la atención de tus clientes desde una sola plataforma.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <Link href="/login" className={buttonVariants({ size: "lg" })}>
                    Iniciar Sesión
                  </Link>
                  <a href="https://wa.me/51947082837" target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", size: "lg", className: "group" })}>
                    Solicitar Demo
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:col-span-7 lg:mt-0 relative">
                <div className="relative rounded-xl bg-muted/20 p-2 ring-1 ring-inset ring-border lg:-m-4 lg:rounded-2xl lg:p-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                  <div className="overflow-hidden rounded-md shadow-2xl shadow-primary/20 bg-background ring-1 ring-border animate-[float_6s_ease-in-out_infinite]">
                    <Image
                      src="/dashboard-preview.png"
                      alt="App screenshot"
                      width={1200}
                      height={800}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Todo lo que necesitas para vender más</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Herramientas poderosas diseñadas para optimizar cada aspecto de la comunicación con tus clientes.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {[
                  { title: "Bandeja compartida", icon: MessageSquare, desc: "Todo tu equipo colaborando en un solo número de WhatsApp." },
                  { title: "Automatizaciones", icon: Zap, desc: "Responde 24/7 con flujos automáticos e inteligencia artificial." },
                  { title: "Embudo de clientes", icon: Filter, desc: "Visualiza y organiza cada paso del proceso de venta." },
                  { title: "Campañas", icon: Megaphone, desc: "Envía mensajes masivos y personalizados a tus contactos." },
                  { title: "Gestión de contactos", icon: Users, desc: "Guarda información clave y segmenta tu audiencia fácilmente." },
                  { title: "Dashboard", icon: LayoutDashboard, desc: "Mide el rendimiento de tu equipo y las estadísticas de mensajes." },
                ].map((feature) => (
                  <div key={feature.title} className="group relative flex flex-col rounded-2xl bg-card p-8 ring-1 ring-border shadow-sm transition-all hover:shadow-md hover:ring-primary/50">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                        <feature.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" aria-hidden="true" />
                      </div>
                      {feature.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                      <p className="flex-auto">{feature.desc}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-16">Lo que dicen nuestros clientes</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl p-8 ring-1 ring-border bg-card">
                  <div className="flex items-center gap-1 mb-4 text-amber-400 justify-center">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    &quot;VeraFlow ha transformado por completo la forma en que atendemos a nuestros clientes. La bandeja compartida es un salvavidas para el equipo.&quot;
                  </p>
                  <div className="font-semibold">Cliente Feliz {i}</div>
                  <div className="text-sm text-muted-foreground">Dueño de Negocio</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-16">Preguntas Frecuentes</h2>
            <dl className="space-y-6 divide-y divide-border">
              {[
                { q: "¿Necesito cambiar mi número de WhatsApp?", a: "No, puedes conectar tu número actual de WhatsApp Business o utilizar uno nuevo exclusivo para el sistema." },
                { q: "¿Puedo responder junto con mi equipo?", a: "Sí, la bandeja compartida permite que múltiples agentes atiendan desde diferentes dispositivos usando el mismo número." },
                { q: "¿Qué pasa si recibo muchos mensajes?", a: "El sistema está diseñado para manejar un alto volumen de conversaciones sin interrupciones, ayudándote a priorizar con etiquetas y filtros." },
                { q: "¿Puedo automatizar respuestas?", a: "¡Claro! Puedes crear flujos automáticos, mensajes de bienvenida y respuestas rápidas para optimizar el tiempo de tu equipo." },
                { q: "¿Funciona para cualquier negocio?", a: "VeraFlow se adapta a clínicas, tiendas online, agencias de servicios, inmobiliarias y cualquier negocio que atienda por WhatsApp." },
                { q: "¿Mis datos están seguros?", a: "Totalmente. Tus conversaciones e información de clientes están encriptadas y alojadas en servidores de alta seguridad." }
              ].map((faq, idx) => (
                <div key={idx} className="pt-6">
                  <dt className="text-lg font-semibold leading-7 text-foreground">{faq.q}</dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10"></div>
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance mb-10">
              ¿Listo para automatizar tu negocio con <span className="text-primary">VeraFlow</span> y escalar?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/login" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto font-semibold shadow-lg shadow-primary/20" })}>
                Iniciar Sesión
              </Link>
              <a href="https://wa.me/51947082837" target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto font-semibold group" })}>
                Solicitar Demo
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} VeraFlow. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
