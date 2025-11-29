import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Sparkles, 
  ChefHat, 
  Target, 
  Refrigerator, 
  ArrowRight, 
  Github,
  Zap,
  Database,
  Cloud,
  Cpu
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Animated background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Mascot */}
          <div className="text-8xl animate-float mb-4">🐭</div>
          
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            <span className="text-gradient">Chefcito</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
            Tu asistente culinario inteligente
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Aplicación web con <strong className="text-primary">Inteligencia Artificial</strong> que personaliza 
            recetas según tus ingredientes, objetivos nutricionales y preferencias.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl glow-primary transition-all duration-300 hover:scale-105"
            >
              <Github className="mr-2 h-5 w-5" />
              Ver en GitHub
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
              Ver Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-3 justify-center pt-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">React.js</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">AWS Lambda</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">Python 3.11</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">PostgreSQL</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">OpenAI GPT-4o</Badge>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="relative py-24 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-glass p-8 border-destructive/30 hover:border-destructive/50 transition-all duration-300">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-2xl font-bold mb-3">El Problema</h3>
              <p className="text-muted-foreground leading-relaxed">
                Decidir qué cocinar es difícil: no sabes qué hacer con los ingredientes que tienes, 
                las recetas no se ajustan a tus objetivos nutricionales, y pierdes tiempo buscando opciones.
              </p>
            </Card>
            
            <Card className="card-glass p-8 border-primary/30 hover:border-primary/50 transition-all duration-300 glow-primary">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">La Solución</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-primary">Chefcito</strong> usa IA para interpretar tus ingredientes, 
                filtrar recetas según tu dieta y objetivos, y enriquecer cada plato con tips nutricionales personalizados.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4 bg-card/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Características <span className="text-gradient">Principales</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Cuatro funcionalidades clave impulsadas por IA
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature 1: Recomendador */}
            <Card className="card-glass p-8 hover:scale-[1.02] transition-all duration-300 group">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Recomendador Personalizado</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ajusta 3 sliders (Tiempo, Dificultad, Costo) y recibe las mejores recetas adaptadas 
                a tus necesidades del día.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="badge-blue text-xs">Rápido</Badge>
                <Badge className="badge-green text-xs">Personalizado</Badge>
              </div>
            </Card>

            {/* Feature 2: Refrigerador */}
            <Card className="card-glass p-8 hover:scale-[1.02] transition-all duration-300 group">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Refrigerator className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Refrigerador Inteligente</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Escribe en lenguaje natural los ingredientes que tienes ("pollito y lechuga") 
                y la IA busca recetas perfectas.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="badge-orange text-xs">NLP</Badge>
                <Badge className="badge-blue text-xs">Smart Search</Badge>
              </div>
            </Card>

            {/* Feature 3: Mi Dieta */}
            <Card className="card-glass p-8 hover:scale-[1.02] transition-all duration-300 group">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <ChefHat className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Perfil Nutricional (Mi Dieta)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Define tu objetivo (bajar peso, ganar músculo) y lista alergias. 
                Todas las recetas se filtran y personalizan automáticamente.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="badge-green text-xs">Keto</Badge>
                <Badge className="badge-red text-xs">Bajo Sodio</Badge>
                <Badge className="badge-blue text-xs">Alto Proteína</Badge>
              </div>
            </Card>

            {/* Feature 4: IA Enriquecimiento */}
            <Card className="card-glass p-8 hover:scale-[1.02] transition-all duration-300 group border-primary/40">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Enriquecimiento con IA</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-primary">GPT-4o-mini</strong> analiza cada receta en tiempo real: 
                genera tips nutricionales personalizados y asigna etiquetas inteligentes.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="badge-orange text-xs">AI-Powered</Badge>
                <Badge className="badge-green text-xs">Real-time</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="relative py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Arquitectura <span className="text-gradient">Serverless</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Cómo funciona el flujo de datos de Chefcito
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="relative">
            <Card className="card-glass p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 items-center">
                
                {/* Frontend */}
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#61dafb]/20 to-[#61dafb]/5 border border-[#61dafb]/30 flex items-center justify-center">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#61dafb">
                      <circle cx="12" cy="12" r="2" />
                      <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z" opacity="0.3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">React.js</p>
                    <p className="text-sm text-muted-foreground">Frontend</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-primary animate-pulse hidden md:block" />
                  <div className="md:hidden text-primary text-2xl">↓</div>
                </div>

                {/* API Gateway */}
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF9900]/20 to-[#FF9900]/5 border border-[#FF9900]/30 flex items-center justify-center">
                    <Cloud className="w-10 h-10 text-[#FF9900]" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">API Gateway</p>
                    <p className="text-sm text-muted-foreground">AWS</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-primary animate-pulse hidden md:block" />
                  <div className="md:hidden text-primary text-2xl">↓</div>
                </div>

                {/* Lambda */}
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF9900]/20 to-[#FF9900]/5 border border-[#FF9900]/30 flex items-center justify-center">
                    <Zap className="w-10 h-10 text-[#FF9900]" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Lambda</p>
                    <p className="text-sm text-muted-foreground">Python 3.11</p>
                  </div>
                </div>
              </div>

              {/* Second Row - AI & Database */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-border">
                
                {/* OpenAI */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="text-4xl">↓</div>
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                    <Cpu className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">OpenAI API</p>
                    <p className="text-sm text-muted-foreground">GPT-4o-mini</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Genera tips y etiquetas
                    </p>
                  </div>
                </div>

                {/* PostgreSQL */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="text-4xl">↓</div>
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#336791]/20 to-[#336791]/5 border border-[#336791]/30 flex items-center justify-center">
                    <Database className="w-10 h-10 text-[#336791]" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">PostgreSQL</p>
                    <p className="text-sm text-muted-foreground">AWS RDS</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Recetas y perfiles
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Architecture Labels */}
            <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-card/50 border border-border/50">
                <p className="font-semibold text-primary mb-1">Cliente</p>
                <p className="text-sm text-muted-foreground">Interfaz de usuario interactiva</p>
              </div>
              <div className="p-4 rounded-xl bg-card/50 border border-border/50">
                <p className="font-semibold text-primary mb-1">Compute</p>
                <p className="text-sm text-muted-foreground">Lógica serverless escalable</p>
              </div>
              <div className="p-4 rounded-xl bg-card/50 border border-border/50">
                <p className="font-semibold text-primary mb-1">Datos & IA</p>
                <p className="text-sm text-muted-foreground">Persistencia e inteligencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-border/50">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🐭</span>
              <div>
                <p className="font-bold text-xl">Chefcito</p>
                <p className="text-sm text-muted-foreground">Arquitectura Serverless + IA</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                LinkedIn
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
            <p>© 2024 Chefcito. Desarrollado con React, AWS Lambda, Python y OpenAI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
