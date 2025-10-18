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
                src="https://cdn.poehali.dev/projects/c5819684-fe04-4cbc-b4ad-76ac9181a468/files/2a075883-7b94-49b6-a912-964ed3ec8f98.jpg" 
                alt="Счастливый пациент"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Наши гарантии
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Мы берём на себя полную ответственность за результат
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Shield",
                title: "Пожизненная гарантия",
                description: "На импланты премиум-класса от ведущих производителей"
              },
              {
                icon: "Clock",
                title: "Всё за 1 день",
                description: "Полное восстановление зубного ряда за одно посещение"
              },
              {
                icon: "Award",
                title: "Сертификация",
                description: "Все врачи имеют международные сертификаты"
              },
              {
                icon: "FileCheck",
                title: "Договор",
                description: "Официальный договор с полным описанием гарантий"
              }
            ].map((item, index) => (
              <Card key={index} className="hover-scale border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Преимущества системы All-on-4
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Почему тысячи пациентов выбирают именно эту технологию
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Zap",
                title: "Быстрый результат",
                description: "Полное восстановление улыбки всего за 1 день. Приходите утром без зубов, уходите вечером с красивой улыбкой."
              },
              {
                icon: "DollarSign",
                title: "Экономия бюджета",
                description: "Всего 4 импланта вместо 6-8. Экономия до 40% по сравнению с классической имплантацией."
              },
              {
                icon: "Heart",
                title: "Без костной пластики",
                description: "Импланты устанавливаются под углом, что позволяет обойти участки с недостатком костной ткани."
              },
              {
                icon: "Sparkles",
                title: "Эстетика",
                description: "Натуральный вид и естественная улыбка. Никто не заметит разницы с настоящими зубами."
              },
              {
                icon: "Activity",
                title: "Жевать сразу",
                description: "Временный протез устанавливается в день операции. Можно есть мягкую пищу уже через 2-3 часа."
              },
              {
                icon: "CheckCircle",
                title: "Высокая приживаемость",
                description: "98% успешных операций благодаря современным технологиям и опыту наших врачей."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name={item.icon as any} className="text-secondary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
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
