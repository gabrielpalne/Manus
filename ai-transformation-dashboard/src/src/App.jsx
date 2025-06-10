import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import { TrendingUp, TrendingDown, Target, Users, Zap, Brain, AlertCircle, CheckCircle } from 'lucide-react'
import './App.css'

function App() {
  // Dados simulados para o dashboard
  const kpiData = [
    { name: 'ROI de IA', value: 245, target: 200, unit: '%', trend: 'up' },
    { name: 'Processos Automatizados', value: 12, target: 15, unit: '', trend: 'up' },
    { name: 'Economia de Custos', value: 850, target: 1000, unit: 'k', trend: 'up' },
    { name: 'Satisfação do Cliente', value: 4.2, target: 4.5, unit: '/5', trend: 'down' }
  ]

  const projectsData = [
    { name: 'Chatbot Atendimento', progress: 85, status: 'Em Andamento', roi: 180 },
    { name: 'Análise Preditiva', progress: 60, status: 'Em Andamento', roi: 220 },
    { name: 'Automação RH', progress: 100, status: 'Concluído', roi: 150 },
    { name: 'Visão Computacional', progress: 30, status: 'Iniciado', roi: 300 }
  ]

  const monthlyData = [
    { month: 'Jan', economia: 120, projetos: 2 },
    { month: 'Fev', economia: 180, projetos: 3 },
    { month: 'Mar', economia: 250, projetos: 4 },
    { month: 'Abr', economia: 320, projetos: 5 },
    { month: 'Mai', economia: 450, projetos: 6 },
    { month: 'Jun', economia: 580, projetos: 8 }
  ]

  const maturityData = [
    { name: 'Estratégia', value: 75 },
    { name: 'Cultura', value: 60 },
    { name: 'Processos', value: 80 },
    { name: 'Tecnologia', value: 70 },
    { name: 'Dados', value: 65 }
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard de Transformação Digital com IA</h1>
          <p className="text-gray-600">Monitoramento em tempo real do progresso e resultados das iniciativas de IA</p>
        </div>

        {/* KPIs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{kpi.name}</CardTitle>
                {kpi.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {kpi.value}{kpi.unit}
                </div>
                <p className="text-xs text-muted-foreground">
                  Meta: {kpi.target}{kpi.unit}
                </p>
                <Progress 
                  value={(kpi.value / kpi.target) * 100} 
                  className="mt-2"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs para diferentes visualizações */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="projects">Projetos</TabsTrigger>
            <TabsTrigger value="maturity">Maturidade</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Tab: Visão Geral */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Economia Mensal (R$ mil)</CardTitle>
                  <CardDescription>Economia gerada pelas soluções de IA</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="economia" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Projetos por Mês</CardTitle>
                  <CardDescription>Número de projetos de IA implementados</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="projetos" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab: Projetos */}
          <TabsContent value="projects" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Status dos Projetos de IA</CardTitle>
                <CardDescription>Acompanhamento detalhado de cada projeto</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projectsData.map((project, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">{project.name}</h3>
                          <Badge variant={
                            project.status === 'Concluído' ? 'default' :
                            project.status === 'Em Andamento' ? 'secondary' : 'outline'
                          }>
                            {project.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex-1">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progresso</span>
                              <span>{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} />
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-600">ROI Esperado</div>
                            <div className="font-semibold text-green-600">{project.roi}%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab: Maturidade */}
          <TabsContent value="maturity" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Maturidade Digital por Dimensão</CardTitle>
                  <CardDescription>Avaliação das 5 dimensões de maturidade</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={maturityData} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="name" type="category" width={80} />
                      <Tooltip />
                      <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Distribuição da Maturidade</CardTitle>
                  <CardDescription>Visão geral do nível de maturidade</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={maturityData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {maturityData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab: Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Modelos em Produção</CardTitle>
                  <Brain className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">+2 este mês</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,247</div>
                  <p className="text-xs text-muted-foreground">+15% vs mês anterior</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Uptime Médio</CardTitle>
                  <Zap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">99.8%</div>
                  <p className="text-xs text-muted-foreground">Últimos 30 dias</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Alertas e Notificações</CardTitle>
                <CardDescription>Status dos sistemas de IA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium">Chatbot funcionando normalmente</div>
                      <div className="text-sm text-gray-600">Última verificação: há 5 minutos</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    <div>
                      <div className="font-medium">Modelo preditivo precisa de retreinamento</div>
                      <div className="text-sm text-gray-600">Precisão abaixo de 85%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium">Automação RH processou 150 documentos</div>
                      <div className="text-sm text-gray-600">Hoje, 14:30</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default App
