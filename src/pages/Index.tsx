import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Heart" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-foreground">Стоматология Сочи</span>
          </div>
          <Button onClick={scrollToContact} size="lg" className="hidden md:flex">
            Записаться на консультацию
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Пожизненная гарантия
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Имплантация зубов<br />
                <span className="text-primary">«Всё-на-4»</span><br />
                за 1 день
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Восстановим полный зубной ряд за одно посещение. Современная технология All-on-4 с пожизненной гарантией на импланты в Сочи.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} size="lg" className="text-lg px-8">
                  Бесплатная консультация
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (862) 123-45-67
                </Button>
              </div>
            </div>
            <div className="animate-fade-in lg:animate-delay-200">
              <img 
                src="https://cdn.poehali.dev/projects/c5819684-fe04-4cbc-b4ad-76ac9181a468/files/6755380b-cf63-4ca1-9a6e-49d91b5a9e15.jpg" 
                alt="Имплантация All-on-4"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-primary/20 bg-white shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name="CreditCard" className="text-secondary" size={28} />
                  </div>
                  <h3 className="text-3xl font-bold">Рассрочка на 24 месяца</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-secondary flex-shrink-0" size={24} />
                    <p className="text-lg">Без процентов и переплат</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-secondary flex-shrink-0" size={24} />
                    <p className="text-lg">Без первого взноса</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-secondary flex-shrink-0" size={24} />
                    <p className="text-lg">Лечите сейчас, платите потом</p>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                  <p className="text-5xl font-bold text-primary mb-2">25 000 ₽</p>
                  <p className="text-muted-foreground text-lg">в месяц</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 bg-white shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Gift" className="text-primary" size={28} />
                  </div>
                  <h3 className="text-3xl font-bold">В подарок от клиники</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Консультация имплантолога",
                    "План лечения",
                    "КТ-снимок при лечении",
                    "Плановые осмотры дважды в год",
                    "Общий анализ крови"
                  ].map((gift, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <p className="font-medium">{gift}</p>
                      <span className="text-2xl font-bold text-primary">0₽</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button onClick={scrollToContact} size="lg" className="text-xl px-12 h-16 shadow-lg">
              Получить расчёт стоимости + подарки
            </Button>
            <p className="text-muted-foreground mt-4">или позвоните, чтобы задать любой вопрос</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Восстановление зубов по уникальной технологии
          </h2>
          <p className="text-center text-primary text-2xl font-semibold mb-12">
            «Всё за один день»
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "Zap",
                title: "Скорость",
                description: "Вся процедура занимает один день. Утром — визит в клинику, вечером — вы с новой улыбкой."
              },
              {
                icon: "Sparkles",
                title: "Комфорт и эстетика",
                description: "Зубы ощущаются естественно, без дискомфорта, и выглядят безупречно."
              },
              {
                icon: "Utensils",
                title: "Функциональность",
                description: "Сразу после процедуры вы можете вернуться к привычному питанию без ограничений."
              },
              {
                icon: "ShieldCheck",
                title: "Надёжность",
                description: "Доказанная за 30 лет приживаемость имплантов — 99,8%."
              },
              {
                icon: "DollarSign",
                title: "Доступность",
                description: "Стоимость в 2 раза ниже классической имплантации благодаря фиксации на четырёх имплантах."
              },
              {
                icon: "HeartPulse",
                title: "Безопасность",
                description: "Метод подходит пожилым людям и пациентам с сахарным диабетом."
              },
              {
                icon: "BadgeCheck",
                title: "Гарантия",
                description: "Мы предоставляем тройную гарантию: на импланты, протез и выполненную работу."
              }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-foreground">
              Верните себе здоровые зубы и уверенность в себе — раз и навсегда!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Тройная гарантия качества
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Мы берём на себя полную ответственность за результат
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "FileText",
                title: "Гарантия на протез",
                description: "Протез производится в собственной зуботехнической лаборатории по авторским наработкам"
              },
              {
                icon: "Pill",
                title: "Гарантия на импланты",
                description: "Мы используем в работе только сертифицированные оригинальные импланты PALTOP США"
              },
              {
                icon: "Award",
                title: "Гарантия на работу",
                description: "Наша клиника имеет все необходимые лицензии и сертификаты качества"
              }
            ].map((item, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary transition-all duration-300 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={item.icon as any} className="text-primary" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            Что входит в стоимость услуги
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "Осмотр и консультация врача стоматолога",
              "Составление плана лечения",
              "3D планирование операции",
              "Изготовление хирургического шаблона (дополнительно)",
              "4 Имплантата PALTOP США",
              "Операция по установке 4-х имплантатов",
              "Установка 4-х MULTI UNIT",
              "Установка формирователя (по показаниям)",
              "Рентген контроль",
              "Фото протокол",
              "Изготовление и установка адаптационного протеза",
              "Рекомендации"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <Icon name="CheckCircle" className="text-secondary flex-shrink-0 mt-1" size={24} />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Импланты PALTOP США
          </h2>
          <p className="text-center text-primary text-2xl font-semibold mb-12">
            Премиальное качество по специальной цене
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "Award",
                title: "Проверенный бренд",
                description: "Лидер среди имплантов, сертификация FDA"
              },
              {
                icon: "Activity",
                title: "Быстрая приживаемость",
                description: "Биосовместимые материалы снижают риск отторжения"
              },
              {
                icon: "Infinity",
                title: "Пожизненная гарантия",
                description: "От производителя при соблюдении рекомендаций"
              },
              {
                icon: "Smile",
                title: "Естественный вид",
                description: "Идеальная эстетика и комфорт"
              },
              {
                icon: "Clock",
                title: "Минимальный период реабилитации",
                description: "Быстрое восстановление"
              }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            Почему стоит обратиться к нам
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "Users",
                title: "Опытные специалисты",
                description: "Имплантологи с 17+ лет практики"
              },
              {
                icon: "MonitorCheck",
                title: "Современное оборудование",
                description: "КТ - цифровая диагностика, 3D-сканирование, планирование и малотравматичная установка"
              },
              {
                icon: "Shield",
                title: "Пожизненная гарантия на работу",
                description: "Полная ответственность за результат лечения"
              },
              {
                icon: "UserCheck",
                title: "Индивидуальный подход",
                description: "Подбираем решение под ваш бюджет и анатомию"
              },
              {
                icon: "Heart",
                title: "Комфорт и безопасность",
                description: "Безболезненное лечение и качественная анестезия"
              }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-secondary transition-all duration-300 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} className="text-secondary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Как проходит процедура
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Пошаговый процесс имплантации All-on-4
          </p>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: "1",
                title: "Диагностика и планирование",
                description: "Проводим полное обследование: 3D-томография, анализы, моделирование. Создаём точный план лечения с учётом ваших особенностей.",
                time: "1-2 часа"
              },
              {
                step: "2",
                title: "Установка имплантов",
                description: "Под местной анестезией устанавливаем 4 импланта в оптимальных точках челюсти. Боковые импланты ставим под углом 30-45°.",
                time: "2-3 часа"
              },
              {
                step: "3",
                title: "Фиксация протеза",
                description: "В тот же день устанавливаем временный несъёмный протез. Вы уходите из клиники с новыми зубами и красивой улыбкой.",
                time: "1-2 часа"
              },
              {
                step: "4",
                title: "Постоянный протез",
                description: "Через 4-6 месяцев, после полного приживления имплантов, меняем временный протез на постоянный из диоксида циркония.",
                time: "Через 4-6 мес"
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <Card className="flex-1 border-2 hover:border-primary transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full whitespace-nowrap ml-4">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Кейсы наших работ
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Реальные результаты наших пациентов. До и После имплантации All-on-4
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Мария, 52 года",
                problem: "Полная адентия верхней челюсти",
                result: "Установка All-on-4, временный протез в день операции",
                time: "1 день",
                image: "https://cdn.poehali.dev/projects/c5819684-fe04-4cbc-b4ad-76ac9181a468/files/16a5775e-68f6-4d86-a3eb-7969a525df0f.jpg"
              },
              {
                name: "Александр, 48 лет",
                problem: "Множественное отсутствие зубов",
                result: "Имплантация All-on-4 на обе челюсти",
                time: "1 день",
                image: "https://cdn.poehali.dev/projects/c5819684-fe04-4cbc-b4ad-76ac9181a468/files/16a5775e-68f6-4d86-a3eb-7969a525df0f.jpg"
              },
              {
                name: "Елена, 55 лет",
                problem: "Атрофия костной ткани",
                result: "All-on-4 без костной пластики",
                time: "1 день",
                image: "https://cdn.poehali.dev/projects/c5819684-fe04-4cbc-b4ad-76ac9181a468/files/16a5775e-68f6-4d86-a3eb-7969a525df0f.jpg"
              }
            ].map((caseItem, index) => (
              <Card key={index} className="overflow-hidden hover-scale border-2 hover:border-primary transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={caseItem.image} 
                    alt={`Кейс ${caseItem.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{caseItem.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Icon name="AlertCircle" className="text-muted-foreground flex-shrink-0 mt-0.5" size={16} />
                      <p className="text-muted-foreground"><span className="font-semibold">Проблема:</span> {caseItem.problem}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-secondary flex-shrink-0 mt-0.5" size={16} />
                      <p className="text-muted-foreground"><span className="font-semibold">Решение:</span> {caseItem.result}</p>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <Icon name="Clock" className="text-primary" size={16} />
                      <p className="text-primary font-semibold">{caseItem.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Отзывы пациентов
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Что говорят наши пациенты о результатах лечения
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Ольга Викторовна",
                age: "54 года",
                review: "Долго не решалась на имплантацию, боялась боли и долгого восстановления. Но технология All-on-4 превзошла все ожидания! Утром пришла без зубов, вечером ушла с красивой улыбкой. Совершенно безболезненно благодаря качественной анестезии. Спасибо докторам за профессионализм и чуткое отношение!",
                rating: 5,
                image: "https://cdn.poehali.dev/projects/c5819684-fe04-4cbc-b4ad-76ac9181a468/files/85341f3f-9229-4687-994d-b42a5991490b.jpg"
              },
              {
                name: "Михаил Петрович",
                age: "47 лет",
                review: "Потерял несколько зубов из-за пародонтита. Врачи предложили All-on-4 и я не пожалел! Всё сделали за один день, импланты PALTOP прижились отлично. Сейчас ем всё что хочу, улыбаюсь без стеснения. Рассрочка на 24 месяца очень помогла. Рекомендую всем!",
                rating: 5,
                image: "https://cdn.poehali.dev/projects/c5819684-fe04-4cbc-b4ad-76ac9181a468/files/cebca702-72f8-40b0-bcbe-1bfabf7c8d20.jpg"
              },
              {
                name: "Светлана Александровна",
                age: "51 год",
                review: "Мне сказали что нужна костная пластика, но в этой клинике провели All-on-4 без неё! Операция прошла быстро, никаких осложнений. Уже через неделю забыла что у меня импланты. Врачи - настоящие профессионалы своего дела. Цена полностью оправдана качеством!",
                rating: 5,
                image: "https://cdn.poehali.dev/projects/c5819684-fe04-4cbc-b4ad-76ac9181a468/files/85341f3f-9229-4687-994d-b42a5991490b.jpg"
              },
              {
                name: "Андрей Николаевич",
                age: "56 лет",
                review: "Обратился в клинику по рекомендации друга. Всё на высшем уровне: современное оборудование, внимательные врачи, качественные материалы. Имплантация All-on-4 заняла несколько часов, но результат того стоил. Прошло полгода - всё отлично! Пожизненная гарантия даёт уверенность.",
                rating: 5,
                image: "https://cdn.poehali.dev/projects/c5819684-fe04-4cbc-b4ad-76ac9181a468/files/cebca702-72f8-40b0-bcbe-1bfabf7c8d20.jpg"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-secondary transition-all duration-300 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{testimonial.age}</p>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">"{testimonial.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Восстановите зубы один раз и навсегда - по лучшей цене
              </h2>
              <p className="text-lg mb-8 text-white/90 leading-relaxed">
                Имплантация All-on-4 с использованием премиум-имплантов PALTOP. Временный протез в день операции. Пожизненная гарантия на работу.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Всё за 1 день</p>
                    <p className="text-sm text-white/80">От диагностики до зубов</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Гарантия</p>
                    <p className="text-sm text-white/80">Пожизненная на работу</p>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto font-bold shadow-xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Записаться на консультацию
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              
              <p className="text-sm text-white/80 mt-4">
                Консультация и диагностика абсолютно бесплатны
              </p>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img 
                  src="https://cdn.poehali.dev/projects/c5819684-fe04-4cbc-b4ad-76ac9181a468/files/a3a239d0-9545-4945-b70a-924867327a55.jpg"
                  alt="Восстановление зубов All-on-4"
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-xl shadow-2xl">
                <div className="text-center">
                  <p className="text-sm font-semibold mb-1">От</p>
                  <p className="text-3xl font-bold">179 000 ₽</p>
                  <p className="text-xs mt-1 opacity-90">за одну челюсть</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Наши специалисты
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Команда опытных имплантологов с международной сертификацией
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Иванов Сергей Петрович",
                position: "Главный имплантолог",
                experience: "15 лет опыта",
                image: "https://cdn.poehali.dev/projects/c5819684-fe04-4cbc-b4ad-76ac9181a468/files/ae0fcf41-aacb-463b-bed5-962d2bddd9fe.jpg"
              },
              {
                name: "Петрова Анна Михайловна",
                position: "Хирург-имплантолог",
                experience: "12 лет опыта",
                image: "https://cdn.poehali.dev/projects/c5819684-fe04-4cbc-b4ad-76ac9181a468/files/ae0fcf41-aacb-463b-bed5-962d2bddd9fe.jpg"
              },
              {
                name: "Смирнов Дмитрий Игоревич",
                position: "Ортопед-имплантолог",
                experience: "10 лет опыта",
                image: "https://cdn.poehali.dev/projects/c5819684-fe04-4cbc-b4ad-76ac9181a468/files/ae0fcf41-aacb-463b-bed5-962d2bddd9fe.jpg"
              }
            ].map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover-scale border-2 hover:border-primary transition-all duration-300">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
                  <p className="text-primary font-semibold mb-1">{doctor.position}</p>
                  <p className="text-sm text-muted-foreground">{doctor.experience}</p>
                  <div className="flex justify-center gap-2 mt-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Award" className="text-primary" size={16} />
                    </div>
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="GraduationCap" className="text-primary" size={16} />
                    </div>
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="BadgeCheck" className="text-primary" size={16} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Запишитесь на бесплатную консультацию
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Оставьте заявку, и мы свяжемся с вами в течение 15 минут для записи на приём
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Сочи, ул. Навагинская, д. 12</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (862) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://cdn.poehali.dev/projects/c5819684-fe04-4cbc-b4ad-76ac9181a468/files/9d3d3731-6f1a-4608-9220-388831624ecb.jpg" 
                  alt="Клиника"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <Card className="border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Сообщение (необязательно)</label>
                    <Textarea 
                      placeholder="Опишите вашу ситуацию или задайте вопрос"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full text-lg h-14">
                    Отправить заявку
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Heart" className="text-primary" size={32} />
                <span className="text-2xl font-bold">Стоматология Сочи</span>
              </div>
              <p className="text-gray-400">
                Профессиональная имплантация зубов по системе All-on-4 с пожизненной гарантией
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <p>+7 (862) 123-45-67</p>
                <p>г. Сочи, ул. Навагинская, д. 12</p>
                <p>info@dental-sochi.ru</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Режим работы</h3>
              <div className="space-y-2 text-gray-400">
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб-Вс: 10:00 - 18:00</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Стоматология Сочи. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;