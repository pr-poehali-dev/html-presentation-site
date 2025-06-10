import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Palette",
      title: "Дизайн-система",
      description:
        "Готовые шаблоны и компоненты для создания единого стиля презентации",
    },
    {
      icon: "Zap",
      title: "Быстрое создание",
      description: "Создавайте профессиональные презентации за минуты, не часы",
    },
    {
      icon: "Users",
      title: "Командная работа",
      description:
        "Совместное редактирование и комментирование в реальном времени",
    },
    {
      icon: "BarChart3",
      title: "Аналитика",
      description:
        "Отслеживайте просмотры, взаимодействие и эффективность презентаций",
    },
    {
      icon: "Smartphone",
      title: "Адаптивность",
      description:
        "Презентации отлично выглядят на любых устройствах и экранах",
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description:
        "Надежная защита данных и контроль доступа к вашим презентациям",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-6">
            Всё что нужно для
            <span className="text-purple-600"> идеальной презентации</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мощные инструменты и интуитивный интерфейс помогают создавать
            презентации, которые действительно работают
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-purple-100 group-hover:bg-purple-600 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon
                    name={feature.icon as any}
                    size={28}
                    className="text-purple-600 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
