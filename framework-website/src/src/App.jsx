import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Brain, 
  Target, 
  Cog, 
  BarChart3, 
  CheckCircle, 
  Download, 
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
  Lightbulb,
  FileText,
  Settings,
  Eye,
  Rocket
} from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600 mr-2" />
              <span className="font-bold text-xl text-gray-900">Framework IA</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Início</button>
              <button onClick={() => scrollToSection('framework')} className="text-gray-700 hover:text-blue-600 transition-colors">Framework</button>
              <button onClick={() => scrollToSection('ferramentas')} className="text-gray-700 hover:text-blue-600 transition-colors">Ferramentas</button>
              <button onClick={() => scrollToSection('metricas')} className="text-gray-700 hover:text-blue-600 transition-colors">Métricas</button>
              <button onClick={() => scrollToSection('documentacao')} className="text-gray-700 hover:text-blue-600 transition-colors">Documentação</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Metodologia Completa
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Framework de Consultoria em{' '}
              <span className="text-blue-600">Transformação Digital com IA</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Sua metodologia completa para impulsionar a inovação e resultados com Inteligência Artificial. 
              Do diagnóstico à implementação, com ferramentas práticas e métricas de ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('framework')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Explorar o Framework
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('documentacao')}
              >
                <Download className="mr-2 h-4 w-4" />
                Baixar Documentação
              </Button>
            </div>
          </div>

          {/* Quick Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="border-blue-200 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Resultados Mensuráveis</h3>
                <p className="text-gray-600">ROI demonstrável com sistema completo de 17 KPIs categorizados</p>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Cog className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Ferramentas Práticas</h3>
                <p className="text-gray-600">Templates, dashboard e guias prontos para implementação imediata</p>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Abordagem Holística</h3>
                <p className="text-gray-600">Integra estratégia, tecnologia, pessoas e processos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Framework Structure */}
      <section id="framework" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              As 4 Etapas do Nosso Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia estruturada que guia sua empresa desde o diagnóstico inicial até a otimização contínua
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Etapa 1 */}
            <Card className="relative overflow-hidden border-blue-200">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <Target className="h-8 w-8 text-blue-600" />
                  <Badge className="bg-blue-100 text-blue-800">4-8 semanas</Badge>
                </div>
                <CardTitle className="text-blue-900">Etapa 1</CardTitle>
                <CardDescription className="font-semibold text-blue-700">
                  Diagnóstico e Estratégia
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Assessment de maturidade digital
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Workshop de ideação
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Definição de visão e objetivos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Análise de lacunas
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Etapa 2 */}
            <Card className="relative overflow-hidden border-green-200">
              <CardHeader className="bg-green-50">
                <div className="flex items-center justify-between">
                  <Settings className="h-8 w-8 text-green-600" />
                  <Badge className="bg-green-100 text-green-800">6-10 semanas</Badge>
                </div>
                <CardTitle className="text-green-900">Etapa 2</CardTitle>
                <CardDescription className="font-semibold text-green-700">
                  Planejamento e Design
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Desenvolvimento do roadmap
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Seleção de tecnologias
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Design da solução de IA
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Planejamento de recursos
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Etapa 3 */}
            <Card className="relative overflow-hidden border-purple-200">
              <CardHeader className="bg-purple-50">
                <div className="flex items-center justify-between">
                  <Rocket className="h-8 w-8 text-purple-600" />
                  <Badge className="bg-purple-100 text-purple-800">12-24 semanas</Badge>
                </div>
                <CardTitle className="text-purple-900">Etapa 3</CardTitle>
                <CardDescription className="font-semibold text-purple-700">
                  Desenvolvimento e Implementação
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Desenvolvimento de modelos de IA
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Testes e validação
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Implantação (rollout)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Gestão da mudança e treinamento
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Etapa 4 */}
            <Card className="relative overflow-hidden border-orange-200">
              <CardHeader className="bg-orange-50">
                <div className="flex items-center justify-between">
                  <BarChart3 className="h-8 w-8 text-orange-600" />
                  <Badge className="bg-orange-100 text-orange-800">Contínua</Badge>
                </div>
                <CardTitle className="text-orange-900">Etapa 4</CardTitle>
                <CardDescription className="font-semibold text-orange-700">
                  Monitoramento e Otimização
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Aferição de resultados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Monitoramento de performance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Melhoria contínua
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Governança e ética da IA
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="ferramentas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ferramentas e Templates Práticos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conjunto completo de ferramentas desenvolvidas para facilitar a implementação do framework
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Assessment */}
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <FileText className="h-8 w-8 text-blue-600" />
                  <Badge className="bg-green-100 text-green-800">Pronto</Badge>
                </div>
                <CardTitle>Assessment de Maturidade</CardTitle>
                <CardDescription>
                  Questionário estruturado para avaliar maturidade digital em 5 dimensões
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 15 questões categorizadas</li>
                  <li>• Escala de pontuação 1-5</li>
                  <li>• Interpretação automática</li>
                  <li>• Recomendações por dimensão</li>
                </ul>
              </CardContent>
            </Card>

            {/* Workshop */}
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                  <Badge className="bg-green-100 text-green-800">Pronto</Badge>
                </div>
                <CardTitle>Workshop de Ideação</CardTitle>
                <CardDescription>
                  Template completo para conduzir workshops de 4 horas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Agenda detalhada</li>
                  <li>• Canvas de casos de uso</li>
                  <li>• Matriz de priorização</li>
                  <li>• Materiais e checklist</li>
                </ul>
              </CardContent>
            </Card>

            {/* Dashboard */}
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                  <Badge className="bg-blue-100 text-blue-800">Funcional</Badge>
                </div>
                <CardTitle>Dashboard de Monitoramento</CardTitle>
                <CardDescription>
                  Aplicação web interativa para acompanhamento de KPIs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 4 abas de visualização</li>
                  <li>• Gráficos interativos</li>
                  <li>• KPIs em tempo real</li>
                  <li>• Alertas e notificações</li>
                </ul>
                <Button className="w-full mt-4" variant="outline" onClick={() => window.open('https://kqqcduir.manus.space', '_blank')}>
                  <Eye className="mr-2 h-4 w-4" />
                  Acessar Dashboard
                </Button>
              </CardContent>
            </Card>

            {/* Templates CSV */}
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <FileText className="h-8 w-8 text-orange-600" />
                  <Badge className="bg-green-100 text-green-800">Pronto</Badge>
                </div>
                <CardTitle>Templates CSV</CardTitle>
                <CardDescription>
                  Planilhas estruturadas para coleta e análise de dados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Resultados de assessment</li>
                  <li>• Priorização de ideias</li>
                  <li>• Dados de exemplo</li>
                  <li>• Fórmulas pré-configuradas</li>
                </ul>
              </CardContent>
            </Card>

            {/* Sistema de Métricas */}
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <TrendingUp className="h-8 w-8 text-red-600" />
                  <Badge className="bg-green-100 text-green-800">Completo</Badge>
                </div>
                <CardTitle>Sistema de Métricas</CardTitle>
                <CardDescription>
                  Framework completo com 17 KPIs categorizados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 5 categorias de KPIs</li>
                  <li>• Métricas financeiras</li>
                  <li>• Indicadores operacionais</li>
                  <li>• Análise de qualidade</li>
                </ul>
              </CardContent>
            </Card>

            {/* Documentação */}
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <FileText className="h-8 w-8 text-gray-600" />
                  <Badge className="bg-green-100 text-green-800">Completa</Badge>
                </div>
                <CardTitle>Documentação Completa</CardTitle>
                <CardDescription>
                  Manuais detalhados e guias de implementação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Guia de implementação</li>
                  <li>• Manual de ferramentas</li>
                  <li>• Metodologias detalhadas</li>
                  <li>• Casos de uso práticos</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metricas" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aferição de Resultados e KPIs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistema completo com 17 KPIs categorizados para demonstrar valor mensurável
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* KPI Categories */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">5 Categorias de KPIs</h3>
              <div className="space-y-6">
                <Card className="border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <TrendingUp className="h-6 w-6 text-green-600 mr-3" />
                      <h4 className="font-semibold text-lg">Financeiros (4 KPIs)</h4>
                    </div>
                    <p className="text-gray-600">ROI, economia de custos, aumento de receita, redução de tempo</p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Cog className="h-6 w-6 text-blue-600 mr-3" />
                      <h4 className="font-semibold text-lg">Operacionais (4 KPIs)</h4>
                    </div>
                    <p className="text-gray-600">Processos automatizados, volume de transações, precisão, disponibilidade</p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Shield className="h-6 w-6 text-purple-600 mr-3" />
                      <h4 className="font-semibold text-lg">Qualidade (4 KPIs)</h4>
                    </div>
                    <p className="text-gray-600">Satisfação do cliente, NPS, taxa de erro, tempo de resolução</p>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Users className="h-6 w-6 text-orange-600 mr-3" />
                      <h4 className="font-semibold text-lg">Adoção (4 KPIs)</h4>
                    </div>
                    <p className="text-gray-600">Taxa de adoção, frequência de uso, maturidade, capacitação</p>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Lightbulb className="h-6 w-6 text-yellow-600 mr-3" />
                      <h4 className="font-semibold text-lg">Inovação (3 KPIs)</h4>
                    </div>
                    <p className="text-gray-600">Novos casos de uso, tempo de implementação, índice de inovação</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* ROI Example */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Exemplo de Evolução de ROI</h3>
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Retorno sobre Investimento</CardTitle>
                  <CardDescription>Evolução mensal do ROI em IA</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Janeiro</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={18} className="w-32" />
                        <span className="text-sm font-medium">45%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Fevereiro</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={31} className="w-32" />
                        <span className="text-sm font-medium">78%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Março</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={50} className="w-32" />
                        <span className="text-sm font-medium">125%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Abril</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={66} className="w-32" />
                        <span className="text-sm font-medium">165%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Maio</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={79} className="w-32" />
                        <span className="text-sm font-medium">198%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Junho</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={98} className="w-32" />
                        <span className="text-sm font-medium text-green-600">245%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="text-center bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">245%</div>
                      <div className="text-sm text-gray-600">ROI Atual</div>
                    </div>
                    <div className="text-center bg-blue-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-600">850k</div>
                      <div className="text-sm text-gray-600">Economia (R$)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por Que Nosso Framework é Único?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              5 diferenciais que tornam nossa metodologia uma solução completa e eficaz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-200 text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-3">Abordagem Holística</h3>
                <p className="text-gray-600">
                  Cobre todos os aspectos da transformação: estratégia, tecnologia, pessoas e processos
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 text-center">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-3">Orientação a Resultados</h3>
                <p className="text-gray-600">
                  Sistema robusto de métricas e KPIs com foco em ROI e valor de negócio
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 text-center">
              <CardContent className="p-8">
                <Cog className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-3">Ferramentas Práticas</h3>
                <p className="text-gray-600">
                  Templates prontos para uso, dashboard funcional e guias detalhados
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 text-center">
              <CardContent className="p-8">
                <Settings className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-3">Flexibilidade</h3>
                <p className="text-gray-600">
                  Adaptável para diferentes setores e tamanhos de empresa
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 text-center">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-3">Base Científica</h3>
                <p className="text-gray-600">
                  Fundamentado em frameworks reconhecidos e melhores práticas da indústria
                </p>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 text-center">
              <CardContent className="p-8">
                <Lightbulb className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-3">Inovação Contínua</h3>
                <p className="text-gray-600">
                  Processo de melhoria contínua com governança e ética da IA
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="documentacao" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documentação e Recursos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acesse toda a documentação, templates e ferramentas desenvolvidas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Documentos Principais */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Documentos Principais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Entrega Final
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Framework Outline
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Guia de Implementação
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Manual de Ferramentas
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Metodologias e Processos
                </Button>
              </CardContent>
            </Card>

            {/* Templates e Ferramentas */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900">Templates e Ferramentas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Assessment de Maturidade
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Workshop de Ideação
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Templates CSV
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Sistema de Métricas
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Dashboard (Código Fonte)
                </Button>
              </CardContent>
            </Card>

            {/* Aplicações Web */}
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-900">Aplicações Web</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => window.open('https://kqqcduir.manus.space', '_blank')}>
                  <Eye className="mr-2 h-4 w-4" />
                  Dashboard de Monitoramento
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Apresentação Executiva
                </Button>
                <div className="text-center text-sm text-gray-500 mt-4">
                  <p>Dashboard disponível em: <a href="https://kqqcduir.manus.space" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">kqqcduir.manus.space</a></p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          <div className="mt-16">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-center">Próximos Passos Recomendados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold text-blue-600">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Validação Prática</h4>
                    <p className="text-sm text-gray-600">Aplicar o framework em projeto piloto</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold text-green-600">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Capacitação</h4>
                    <p className="text-sm text-gray-600">Treinar equipe na metodologia</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold text-purple-600">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Refinamento</h4>
                    <p className="text-sm text-gray-600">Coletar feedback e aprimorar</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold text-orange-600">4</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Expansão</h4>
                    <p className="text-sm text-gray-600">Desenvolver versões setoriais</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Brain className="h-8 w-8 text-blue-400 mr-2" />
            <span className="font-bold text-xl">Framework IA</span>
          </div>
          <p className="text-gray-400 mb-4">
            Framework de Consultoria em Transformação Digital com IA
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Framework IA. Desenvolvido para impulsionar a inovação com Inteligência Artificial.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
