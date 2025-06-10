import Icon from "@/components/ui/icon";

const StatsSection = () => {
  const stats = [
    {
      icon: "TrendingUp",
      number: "50K+",
      label: "Презентаций создано",
      description: "Ежемесячно",
    },
    {
      icon: "Users",
      number: "10K+",
      label: "Активных пользователей",
      description: "По всему миру",
    },
    {
      icon: "Clock",
      number: "5x",
      label: "Быстрее создание",
      description: "Чем у конкурентов",
    },
    {
      icon: "Award",
      number: "98%",
      label: "Удовлетворенность",
      description: "Клиентов",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-purple-300 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-300 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            Цифры говорят сами за себя
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам профессионалов, которые уже создают
            впечатляющие презентации
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <Icon
                  name={stat.icon as any}
                  size={32}
                  className="text-white"
                />
              </div>
              <div className="text-4xl md:text-5xl font-bold font-montserrat mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-purple-200 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <Icon name="Sparkles" size={20} />
            <span className="font-medium">Новые функции каждую неделю</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
