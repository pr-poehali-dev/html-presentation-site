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
      icon: "DollarSign",
      title: "Высокая зарплата",
      description:
        "Программисты входят в топ самых высокооплачиваемых профессий в мире",
    },
    {
      icon: "Home",
      title: "Удаленная работа",
      description: "Работайте из дома, кафе или любой точки мира с интернетом",
    },
    {
      icon: "Lightbulb",
      title: "Творческая работа",
      description:
        "Решайте интересные задачи и создавайте продукты, которыми пользуются миллионы",
    },
    {
      icon: "TrendingUp",
      title: "Карьерный рост",
      description:
        "Быстрое продвижение по карьерной лестнице и постоянное развитие",
    },
    {
      icon: "Globe",
      title: "Глобальные возможности",
      description:
        "Работайте в международных компаниях и проектах по всему миру",
    },
    {
      icon: "Users",
      title: "IT-сообщество",
      description:
        "Огромное сообщество разработчиков, готовых помочь и поделиться опытом",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-6">
            Почему выбирают
            <span className="text-indigo-600"> профессию программиста</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Программирование открывает двери в мир безграничных возможностей и
            стабильного будущего
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-indigo-100 group-hover:bg-indigo-600 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon
                    name={feature.icon as any}
                    size={28}
                    className="text-indigo-600 group-hover:text-white transition-colors duration-300"
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
