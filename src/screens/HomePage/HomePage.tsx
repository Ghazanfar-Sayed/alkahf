import { ChevronLeftIcon, ChevronRightIcon, SendIcon, BookOpenIcon, MessageCircleIcon, UsersIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

export const HomePage = (): JSX.Element => {
  const navigationItems = [
    "الکتاب",
    "مقالات",
    "دروس",
    "درباره ما",
    "تماس با ما",
    "ملاقات ها",
  ];

  const categoryTabs = [
    "کلمه العدد",
    "المواضیع القرانیه",
    "الحوارات",
    "المواضیع الحسینیه العاشوراییه",
    "المواضیع اعقایدیه",
    "المواضیع الخلاقیه",
  ];

  const books = [
    {
      id: 1,
      title: "أصول الفقه الإسلامي",
      description: "دراسة شاملة في أصول الفقه وقواعده الأساسية مع التطبيقات العملية والأمثلة المعاصرة",
      image: "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=400",
      ctaText: "اقرأ المزيد"
    },
    {
      id: 2,
      title: "تفسير القرآن الكريم",
      description: "تفسير مبسط وواضح لآيات القرآن الكريم مع الشرح والتوضيح باللغة العربية الفصحى",
      image: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=400",
      ctaText: "تصفح الكتاب"
    },
    {
      id: 3,
      title: "الحديث النبوي الشريف",
      description: "مجموعة مختارة من الأحاديث النبوية الصحيحة مع الشرح والتوضيح والدروس المستفادة",
      image: "https://images.pexels.com/photos/8111120/pexels-photo-8111120.jpeg?auto=compress&cs=tinysrgb&w=400",
      ctaText: "استكشف الآن"
    }
  ];

  const [currentBookIndex, setCurrentBookIndex] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState(categoryTabs[0]);

  const nextBook = () => {
    setCurrentBookIndex((prev) => (prev + 1) % books.length);
  };

  const prevBook = () => {
    setCurrentBookIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  const currentBook = books[currentBookIndex];

  // Tab content data
  const tabContent = {
    "كلمة العدد": {
      recent: [
        { title: "كلمة العدد لشهر محرم", description: "رسالة روحانية لبداية العام الهجري الجديد", date: "منذ يوم" },
        { title: "دروس من عاشوراء", description: "العبر والدروس المستفادة من واقعة كربلاء", date: "منذ 3 أيام" },
        { title: "التوبة والإنابة", description: "أهمية التوبة النصوح في حياة المؤمن", date: "منذ أسبوع" },
        { title: "الصبر والثبات", description: "كيف نتعلم الصبر من سيرة الأنبياء", date: "منذ أسبوعين" }
      ],
      popular: [
        { title: "معنى الإيمان الحقيقي", description: "ما هو الإيمان وكيف نحققه في قلوبنا", reads: "25,340" },
        { title: "أهمية الدعاء", description: "فضل الدعاء وآدابه في الإسلام", reads: "18,920" },
        { title: "التقوى والورع", description: "كيف نحقق التقوى في حياتنا اليومية", reads: "16,780" },
        { title: "الأخلاق الإسلامية", description: "القيم والأخلاق التي يدعو إليها الإسلام", reads: "14,560" }
      ]
    },
    "المواضیع القرانیه": {
      recent: [
        { title: "تفسير سورة الفاتحة", description: "شرح مفصل لمعاني وأحكام سورة الفاتحة", date: "منذ يومين" },
        { title: "إعجاز القرآن العلمي", description: "الحقائق العلمية في القرآن الكريم", date: "منذ 4 أيام" },
        { title: "آداب تلاوة القرآن", description: "السنن والآداب المستحبة عند قراءة القرآن", date: "منذ أسبوع" },
        { title: "حفظ القرآن الكريم", description: "طرق وأساليب حفظ القرآن الكريم", date: "منذ أسبوعين" }
      ],
      popular: [
        { title: "أسماء الله الحسنى", description: "شرح وتفسير أسماء الله الحسنى", reads: "32,150" },
        { title: "قصص الأنبياء", description: "العبر والدروس من قصص الأنبياء في القرآن", reads: "28,940" },
        { title: "آيات الأحكام", description: "الآيات التي تتضمن أحكام شرعية", reads: "22,670" },
        { title: "المحكم والمتشابه", description: "فهم الآيات المحكمة والمتشابهة", reads: "19,830" }
      ]
    },
    "الحوارات": {
      recent: [
        { title: "حوار مع عالم أزهري", description: "نقاش حول قضايا معاصرة في الفقه الإسلامي", date: "منذ يوم" },
        { title: "أسئلة الشباب المعاصرة", description: "إجابات على استفسارات الجيل الجديد", date: "منذ 3 أيام" },
        { title: "الحوار بين الأديان", description: "أسس الحوار الحضاري مع الآخر", date: "منذ 5 أيام" },
        { title: "المرأة في الإسلام", description: "حوار حول مكانة المرأة ودورها", date: "منذ أسبوع" }
      ],
      popular: [
        { title: "الإسلام والعلم", description: "العلاقة بين الدين والعلم الحديث", reads: "41,230" },
        { title: "الشباب والإيمان", description: "كيف يحافظ الشباب على إيمانهم", reads: "35,670" },
        { title: "التربية الإسلامية", description: "أسس تربية الأطفال في الإسلام", reads: "29,450" },
        { title: "الاقتصاد الإسلامي", description: "مبادئ الاقتصاد في الشريعة", reads: "24,890" }
      ]
    },
    "المواضیع الحسینیه العاشوراییه": {
      recent: [
        { title: "دروس من كربلاء", description: "العبر والدروس المستفادة من واقعة عاشوراء", date: "منذ يوم" },
        { title: "شخصية الإمام الحسين", description: "سيرة وأخلاق سيد الشهداء", date: "منذ يومين" },
        { title: "أصحاب الحسين", description: "قصص أصحاب الإمام الحسين وتضحياتهم", date: "منذ 4 أيام" },
        { title: "زينب الكبرى", description: "دور السيدة زينب في نقل رسالة كربلاء", date: "منذ أسبوع" }
      ],
      popular: [
        { title: "يوم عاشوراء", description: "أحداث يوم العاشر من محرم وأهميته", reads: "38,920" },
        { title: "خطبة الإمام الحسين", description: "تحليل خطب الإمام الحسين في كربلاء", reads: "31,450" },
        { title: "الثورة الحسينية", description: "أهداف ومبادئ النهضة الحسينية", reads: "27,680" },
        { title: "إحياء عاشوراء", description: "كيفية إحياء ذكرى عاشوراء", reads: "23,340" }
      ]
    },
    "المواضیع اعقایدیه": {
      recent: [
        { title: "أصول الدين", description: "الأسس العقائدية في الإسلام", date: "منذ يوم" },
        { title: "التوحيد وأقسامه", description: "أنواع التوحيد في العقيدة الإسلامية", date: "منذ 3 أيام" },
        { title: "الإيمان بالغيب", description: "أهمية الإيمان بالأمور الغيبية", date: "منذ 5 أيام" },
        { title: "القضاء والقدر", description: "فهم مسألة القدر في الإسلام", date: "منذ أسبوع" }
      ],
      popular: [
        { title: "أركان الإيمان", description: "شرح أركان الإيمان الستة", reads: "45,670" },
        { title: "صفات الله تعالى", description: "الصفات الواجبة والمستحيلة لله", reads: "39,230" },
        { title: "الأنبياء والرسل", description: "الإيمان بالأنبياء وخصائصهم", reads: "33,890" },
        { title: "اليوم الآخر", description: "الإيمان بالبعث والحساب", reads: "28,450" }
      ]
    },
    "المواضیع الخلاقیه": {
      recent: [
        { title: "الصدق والأمانة", description: "أهمية الصدق والأمانة في الإسلام", date: "منذ يوم" },
        { title: "بر الوالدين", description: "حقوق الوالدين وواجبات الأبناء", date: "منذ يومين" },
        { title: "العدل والإنصاف", description: "مبدأ العدالة في التعامل مع الآخرين", date: "منذ 4 أيام" },
        { title: "الرحمة والتسامح", description: "خلق الرحمة في الإسلام", date: "منذ أسبوع" }
      ],
      popular: [
        { title: "أخلاق النبي محمد", description: "الأخلاق النبوية والاقتداء بها", reads: "52,340" },
        { title: "التواضع والتكبر", description: "خطر الكبر وفضل التواضع", reads: "41,890" },
        { title: "الصبر والشكر", description: "أهمية الصبر والشكر في حياة المؤمن", reads: "37,560" },
        { title: "حسن الخلق", description: "كيف نتحلى بالأخلاق الحسنة", reads: "32,780" }
      ]
    }
  };

  return (
    <div className="bg-[#fff1d0] min-h-screen w-full">
      <div className="bg-app-accent w-full max-w-7xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="pt-6 pb-4">
          <div className="bg-app-secondary rounded-lg px-4 py-3 lg:px-6 lg:py-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Site Title - Mobile First */}
              <div className="order-2 lg:order-3 text-center lg:text-right">
                <h1 className="font-['Amiri',Helvetica] font-normal text-white text-base lg:text-lg tracking-[-0.08px] leading-[22px] [direction:rtl]">
                  موقع الکهف الطلاب الفغانی
                </h1>
              </div>

              {/* Navigation - Hidden on mobile, shown on larger screens */}
              <nav className="order-1 lg:order-1 hidden lg:flex">
                <div className="flex items-center gap-4 xl:gap-6">
                  {navigationItems.map((item, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="h-auto p-2 font-['Amiri',Helvetica] font-normal text-white text-sm xl:text-base hover:bg-white/10 [direction:rtl]"
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </nav>

              {/* Search */}
              <div className="order-3 lg:order-2 w-full max-w-xs lg:max-w-sm">
                <div className="flex items-center bg-[#78788029] rounded-full px-4 py-2">
                  <Input
                    placeholder="جستجو"
                    className="border-0 bg-transparent text-white placeholder:text-white font-['Amiri',Helvetica] font-normal text-sm lg:text-base focus-visible:ring-0 [direction:rtl]"
                  />
                  <div className="text-white text-base ml-2">
                    􀊫
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="lg:hidden mt-4 pt-4 border-t border-white/20">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {navigationItems.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="h-auto p-2 font-['Amiri',Helvetica] font-normal text-white text-sm hover:bg-white/10 [direction:rtl] justify-center"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="mb-8">
          <Card className="w-full bg-gradient-to-br from-app-secondary via-app-secondary/90 to-app-secondary/80 border-0 shadow-2xl">
            <CardContent className="relative p-6 lg:p-12">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-app-accent/20 p-4 rounded-full">
                    <BookOpenIcon className="w-12 h-12 lg:w-16 lg:h-16 text-app-accent" />
                  </div>
                </div>
                
                <h1 className="font-h1-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 [direction:rtl] leading-tight">
                  اسأل عن دينك
                </h1>
                
                <p className="font-['Amiri',Helvetica] text-app-accent text-lg sm:text-xl lg:text-2xl mb-8 [direction:rtl] max-w-3xl mx-auto leading-relaxed">
                  احصل على إجابات موثوقة لأسئلتك الدينية من علماء متخصصين
                </p>
                
                {/* Question Input */}
                <div className="max-w-2xl mx-auto mb-8">
                  <div className="flex flex-col sm:flex-row gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-3">
                    <Input
                      placeholder="اكتب سؤالك الديني هنا..."
                      className="flex-1 border-0 bg-white text-gray-800 placeholder:text-gray-500 font-['Amiri',Helvetica] text-lg focus-visible:ring-2 focus-visible:ring-app-accent rounded-xl [direction:rtl] h-12"
                    />
                    <Button className="bg-app-accent hover:bg-app-accent/90 text-app-secondary font-bold px-6 py-3 rounded-xl h-12 whitespace-nowrap">
                      <SendIcon className="w-5 h-5 ml-2" />
                      <span className="font-['Amiri',Helvetica] text-lg [direction:rtl]">
                        إرسال السؤال
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <div className="text-center">
                  <div className="bg-app-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircleIcon className="w-8 h-8 text-app-accent" />
                  </div>
                  <h3 className="font-['Amiri',Helvetica] font-bold text-white text-xl mb-2 [direction:rtl]">
                    أسئلة وأجوبة
                  </h3>
                  <p className="font-['Amiri',Helvetica] text-app-accent/80 text-sm [direction:rtl]">
                    احصل على إجابات شافية لجميع استفساراتك الدينية
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-app-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UsersIcon className="w-8 h-8 text-app-accent" />
                  </div>
                  <h3 className="font-['Amiri',Helvetica] font-bold text-white text-xl mb-2 [direction:rtl]">
                    علماء متخصصون
                  </h3>
                  <p className="font-['Amiri',Helvetica] text-app-accent/80 text-sm [direction:rtl]">
                    إجابات من علماء معتمدين ومتخصصين في الشريعة
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-app-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpenIcon className="w-8 h-8 text-app-accent" />
                  </div>
                  <h3 className="font-['Amiri',Helvetica] font-bold text-white text-xl mb-2 [direction:rtl]">
                    مراجع موثوقة
                  </h3>
                  <p className="font-['Amiri',Helvetica] text-app-accent/80 text-sm [direction:rtl]">
                    جميع الإجابات مدعومة بالأدلة من القرآن والسنة
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-10">
                <div className="w-32 h-32 border-2 border-app-accent rounded-full"></div>
              </div>
              <div className="absolute bottom-4 left-4 opacity-10">
                <div className="w-24 h-24 border-2 border-app-accent rounded-full"></div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Books Carousel Section */}
        <section className="mb-8">
          <Card className="w-full bg-gradient-to-l from-app-secondary to-app-secondary/90 rounded-xl shadow-xl">
            <CardContent className="relative p-6 lg:p-8">
              {/* Books Badge */}
              <div className="flex justify-center lg:justify-end mb-4">
                <div className="bg-app-accent rounded-full px-4 py-2">
                  <BookOpenIcon className="w-5 h-5 inline-block ml-2 text-app-secondary" />
                  <span className="font-['Amiri',Helvetica] font-normal text-black text-lg lg:text-xl [direction:rtl]">
                    كتبنا المميزة
                  </span>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                {/* Book Image */}
                <div className="flex-1 order-2 lg:order-1">
                  <div className="relative group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-2xl">
                      <img
                        src={currentBook.image}
                        alt={currentBook.title}
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Book overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Book Details */}
                <div className="order-1 lg:order-2 text-center lg:text-right">
                  <div className="mb-4 lg:mb-6">
                    <h2 className="font-h1-heading font-bold text-white text-2xl sm:text-3xl lg:text-4xl [direction:rtl] mb-4 leading-tight">
                      {currentBook.title}
                    </h2>
                    <p className="font-['Amiri',Helvetica] text-app-accent text-base sm:text-lg lg:text-xl [direction:rtl] leading-relaxed max-w-md mx-auto lg:mx-0">
                      {currentBook.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end">
                    <Button className="bg-app-accent hover:bg-app-accent/90 text-app-secondary rounded-2xl px-6 py-3 lg:px-8 lg:py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                      <BookOpenIcon className="w-5 h-5 lg:w-6 lg:h-6 ml-2" />
                      <span className="font-['Amiri',Helvetica] font-bold text-base lg:text-lg [direction:rtl]">
                        {currentBook.ctaText}
                      </span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevBook}
                  className="pointer-events-auto p-3 hover:bg-white/10 rounded-full bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeftIcon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextBook}
                  className="pointer-events-auto p-3 hover:bg-white/10 rounded-full bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                >
                  <ChevronRightIcon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </Button>
              </div>

              {/* Auto-advance timer indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-1">
                  {books.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === currentBookIndex 
                          ? 'w-8 bg-app-accent' 
                          : 'w-2 bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-10">
                <div className="w-24 h-24 border-2 border-app-accent rounded-full"></div>
              </div>
              <div className="absolute bottom-4 left-4 opacity-10">
                <div className="w-16 h-16 border-2 border-app-accent rounded-full"></div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Categories Section */}
        <section className="mb-8">
          <Card className="w-full bg-white">
            <CardContent className="p-4 lg:p-6">
              <div className="text-center lg:text-right mb-6">
                <h2 className="font-h2-heading font-[number:var(--h2-heading-font-weight)] text-black text-2xl lg:text-[length:var(--h2-heading-font-size)] tracking-[var(--h2-heading-letter-spacing)] leading-[var(--h2-heading-line-height)] [direction:rtl]">
                  تصانیف المقالات
                </h2>
              </div>

              {/* Category Tabs - Responsive */}
              <div className="mb-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="w-full h-auto p-0 bg-transparent flex-wrap justify-center lg:justify-end gap-0">
                    {categoryTabs.map((tab, index) => (
                      <TabsTrigger
                        key={index}
                        value={tab}
                        className="flex-shrink-0 px-2 py-1.5 lg:px-3 lg:py-2 border border-[#0000004c] data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:shadow-none rounded-none first:border-l last:mr-[-1px]"
                      >
                        <span className="font-['Amiri',Helvetica] font-normal text-black text-xs lg:text-sm [direction:rtl]">
                          {tab}
                        </span>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>

              {/* Content Grid */}
              <div className="border border-[#0000004c] p-4 lg:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  {/* Recent Articles */}
                  <div>
                    <h3 className="font-['Amiri',Helvetica] font-bold text-app-secondary text-xl mb-4 [direction:rtl] border-b-2 border-app-secondary pb-2">
                      المقالات الحديثة
                    </h3>
                    <ul className="space-y-3">
                      {tabContent[activeTab]?.recent.map((article, index) => (
                        <li key={index} className={index < tabContent[activeTab].recent.length - 1 ? "border-b border-gray-200 pb-3" : ""}>
                          <a href="#" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="font-['Amiri',Helvetica] font-bold text-gray-800 text-lg mb-1 [direction:rtl] hover:text-app-secondary">
                              {article.title}
                            </h4>
                            <p className="font-['Amiri',Helvetica] text-gray-600 text-sm [direction:rtl] line-clamp-2">
                              {article.description}
                            </p>
                            <span className="font-['Amiri',Helvetica] text-app-secondary text-xs [direction:rtl]">
                              {article.date}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Popular Articles */}
                  <div>
                    <h3 className="font-['Amiri',Helvetica] font-bold text-app-secondary text-xl mb-4 [direction:rtl] border-b-2 border-app-secondary pb-2">
                      المقالات الأكثر قراءة
                    </h3>
                    <ul className="space-y-3">
                      {tabContent[activeTab]?.popular.map((article, index) => (
                        <li key={index} className={index < tabContent[activeTab].popular.length - 1 ? "border-b border-gray-200 pb-3" : ""}>
                          <a href="#" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <div className="flex items-start gap-3 [direction:rtl]">
                              <span className="bg-app-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                                {index + 1}
                              </span>
                              <div className="flex-1">
                                <h4 className="font-['Amiri',Helvetica] font-bold text-gray-800 text-lg mb-1 [direction:rtl] hover:text-app-secondary">
                                  {article.title}
                                </h4>
                                <p className="font-['Amiri',Helvetica] text-gray-600 text-sm [direction:rtl] line-clamp-2">
                                  {article.description}
                                </p>
                                <span className="font-['Amiri',Helvetica] text-app-secondary text-xs [direction:rtl]">
                                  {article.reads} قراءة
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Books Section */}
        <section className="mb-8">
          <Card className="w-full h-64 sm:h-80 lg:h-96 bg-white">
            <CardContent className="h-full flex items-center justify-center p-4">
              <div className="font-['Inter',Helvetica] font-normal text-black text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center [direction:rtl]">
                عکس کتاب ها
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Most Visited and Most Commented Sections */}
        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <Card className="bg-white">
              <CardContent className="h-64 sm:h-80 lg:h-96 flex items-center justify-center p-4">
                <div className="font-['Inter',Helvetica] font-normal text-black text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center [direction:rtl]">
                  الاکثر تعلیقا
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="h-64 sm:h-80 lg:h-96 flex items-center justify-center p-4">
                <div className="font-['Inter',Helvetica] font-normal text-black text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center [direction:rtl]">
                  الاکثر زیاره
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="pb-8">
          <Card className="w-full bg-white">
            <CardContent className="h-64 sm:h-80 lg:h-96 flex items-center justify-center p-4">
              <div className="font-['Inter',Helvetica] font-normal text-black text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center">
                Footer
              </div>
            </CardContent>
          </Card>
        </footer>
      </div>
    </div>
  );
};