import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
            <Icon name="Sparkles" size={16} />
            Новое поколение презентаций
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-6 leading-tight">
          Создавайте
          <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            Впечатляющие
          </span>
          Презентации
        </h1>

        <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Современные инструменты для создания профессиональных презентаций,
          которые захватывают внимание и вдохновляют аудиторию
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-full font-semibold"
          >
            <Icon name="Play" size={20} />
            Начать презентацию
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3 rounded-full font-semibold"
          >
            <Icon name="Download" size={20} />
            Скачать шаблоны
          </Button>
        </div>

        <div className="flex justify-center items-center gap-8 text-purple-200">
          <div className="flex items-center gap-2">
            <Icon name="Users" size={20} />
            <span>10K+ пользователей</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Star" size={20} />
            <span>4.9 рейтинг</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Award" size={20} />
            <span>Награды 2024</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;
