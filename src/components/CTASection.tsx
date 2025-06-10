import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const CTASection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 border-0 text-white">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
                <Icon name="Rocket" size={16} />
                Начните карьеру в IT
              </div>

              <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 leading-tight">
                Готовы стать
                <span className="block text-green-300">программистом?</span>
              </h2>

              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Начните свой путь в IT прямо сейчас. Бесплатные курсы,
                менторская поддержка и гарантия трудоустройства.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-full font-semibold"
              >
                <Icon name="Play" size={20} />
                Начать обучение
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 text-lg px-8 py-3 rounded-full font-semibold"
              >
                <Icon name="FileText" size={20} />
                Скачать roadmap
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-indigo-200">
              <div className="flex items-center gap-2">
                <Icon name="Check" size={16} />
                <span>Бесплатные материалы</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={16} />
                <span>Сообщество программистов</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Award" size={16} />
                <span>Сертификат о прохождении</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Начали карьеру в IT в этом месяце:
          </p>
          <div className="flex justify-center items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full border-2 border-gray-900 flex items-center justify-center text-xs font-bold"
                >
                  {i}
                </div>
              ))}
            </div>
            <span className="text-gray-300 text-sm">
              +2,847 новых программистов
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
