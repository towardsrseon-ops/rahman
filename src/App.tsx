/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageSquare, 
  Settings, 
  Info, 
  Home, 
  Droplets, 
  CheckCircle, 
  Clock, 
  Menu, 
  X,
  ChevronLeft,
  MapPin,
  ExternalLink,
  Car,
  ShieldCheck
} from 'lucide-react';

// --- Constants ---
const CONTACT_NUMBERS = ["07716616487", "07763377759"];
const WHATSAPP_NUMBER = "9647716616487"; // Using Iraq code + principal number

const SERVICES = [
  {
    title: "تبديل زيوت المحركات",
    description: "نقدم أجود أنواع الزيوت العالمية التي تضمن حماية متكاملة لمحرك سيارتك.",
    icon: Droplets
  },
  {
    title: "فحص السيارات",
    description: "فحص شامل ودقيق لجميع أجزاء السيارة باستخدام أحدث التقنيات.",
    icon: Car
  },
  {
    title: "صيانة سريعة",
    description: "خدمات صيانة دورية سريعة واحترافية لضمان أداء سيارتك المثالي.",
    icon: Settings
  }
];

const PRODUCTS = [
  { name: "Eurol Fluence 5W-30", brand: "Eurol", image: "https://images.unsplash.com/photo-1635773103134-8c4f2756852e?q=80&w=300&h=400&fit=crop", price: "متوفر" },
  { name: "Chevron Supreme 10W-40", brand: "Chevron", image: "https://www.santmyer.com/wp-content/uploads/2020/10/Chevron-Supreme-SAE-10W-40_1-QT.png", price: "متوفر" },
  { name: "Chevron Supreme 5W-30", brand: "Chevron", image: "https://i5.walmartimages.com/seo/Chevron-Supreme-Synthetic-Blend-Motor-Oil-5W-30-1-Quart_08868e4b-7756-4f6b-b66f-f042bc3cc37b.de5c6555fd3081a58e73b70b1376544b.jpeg", price: "متوفر" },
  { name: "Chevron Supreme 10W-30 (5L)", brand: "Chevron", image: "https://i5.walmartimages.com/seo/Chevron-Supreme-10W-30-Motor-Oil-5-Quart_9ff26645-178d-4ba7-bb81-9672d7711f8e.cd54ed831284850768446a11d271ae07.jpeg", price: "متوفر" },
  { name: "Chevron Supreme 5W-20", brand: "Chevron", image: "https://www.coastalcountry.com/globalassets/catalogs/product_01374_10002390_333_altimagetext_primary_1_1.jpg?width=516&height=516&rmode=BoxPad&bgcolor=fff", price: "متوفر" },
  { name: "Amsoil Signature 10W-30", brand: "Amsoil", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnT5BhvWkYMG3EtDO3WIv2VLlOdgE1TgyKgAZvejWurw&s", price: "متوفر" },
  { name: "Amsoil 0W-20 Synthetic", brand: "Amsoil", image: "https://media.zid.store/a0347d27-8d78-4ba4-8b51-0eeb5567f946/8d5b7612-2334-404c-8136-a253b90726d4.jpg", price: "متوفر" },
  { name: "Amsoil OE 5W-20", brand: "Amsoil", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGrIC-AY_WKel8v1PsLYZuPyn4sB-FNbiYwqsplO2ZoAXAduBfI7bd8U&s", price: "متوفر" },
  { name: "Amsoil Hybrid 0W-20", brand: "Amsoil", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTu_nFg6jLhf5KzqoGEXFkhu_tM1C7GLz16A&s", price: "متوفر" },
  { name: "Amsoil Formula 4-Stroke", brand: "Amsoil", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNx4-bUOcp5CvBHvvQPrTHJ1tMDqabwmcrUKQ10f8wg&s", price: "متوفر" },
  { name: "Aminol Premium 10W-40", brand: "Aminol", image: "https://aminol.az/media/product/new/PREMIUM%20PMG3%2010W40%20SLCF-5L.webp", price: "متوفر" },
  { name: "Oilfino Performance", brand: "Oilfino", image: "https://images.unsplash.com/photo-1621905231133-d8cd86532d52?q=80&w=300&h=400&fit=crop", price: "متوفر" },
  { name: "Addinol Mega Power", brand: "Addinol", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=300&h=400&fit=crop", price: "متوفر" }
];

// --- Components ---

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#home", icon: Home },
    { name: "من نحن", href: "#about", icon: Info },
    { name: "خدماتنا", href: "#services", icon: Settings },
    { name: "المنتجات", href: "#products", icon: Droplets },
    { name: "تواصل معنا", href: "#contact", icon: Phone },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-3 border-b border-gold-500/20' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center">
            <Droplets className="text-black" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white leading-none">خدمات الأصدقاء</span>
            <span className="text-[10px] text-gold-500 tracking-widest font-medium">ثقة وجودة</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white hover:text-gold-500 transition-colors font-medium text-sm"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${CONTACT_NUMBERS[0]}`}
            className="px-5 py-2 bg-gold-500 hover:bg-gold-600 text-black font-bold rounded-full transition-all transform hover:scale-105"
          >
            اتصل بنا
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-gold-500/30 flex flex-col p-6 gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-white py-2 border-b border-white/5"
              >
                <link.icon size={18} className="text-gold-500" />
                <span>{link.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://scontent.fbgw66-3.fna.fbcdn.net/v/t39.30808-6/624487417_2111898062977008_5258394821347066965_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=hox3eGZkClkQ7kNvwGusMIF&_nc_oc=Ado4NAkPt0UkbtCv7fwpPpJqo_hpUVbQYc0Xjyz8CobH8CsiHf8jA9Ni495QsI1rEqI&_nc_zt=23&_nc_ht=scontent.fbgw66-3.fna&_nc_gid=e4C_01NY0bJ6Yn4hshE4mQ&_nc_ss=7b2a8&oh=00_Af3yM9jqrp95hMXqcWXKq_HsFW3aDIpiK9DfXzhk224Flw&oe=69F429A4" 
          alt="مركز خدمات الأصدقاء" 
          className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=2000&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center pt-20">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 text-xs font-bold mb-6">
            <ShieldCheck size={14} />
            الخيار الأول لصيانة سيارتك في المنطقة
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            خدمات <span className="text-gold-500">الأصدقاء</span> <br />
            للزيوت والصيانة
          </h1>
          <p className="text-lg text-neutral-400 mb-8 max-w-lg leading-relaxed">
            نحن نقدم أفضل خدمات تبديل الزيوت وفحص السيارات باستخدام أحدث التقنيات وأجود أنواع الزيوت العالمية. ثقتكم هي غايتنا.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-black font-black rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-gold-500/20">
              تواصل معنا الآن
              <Phone size={20} />
            </a>
            <a href="#services" className="px-8 py-4 border border-white/20 hover:border-gold-500/50 hover:bg-white/5 text-white font-bold rounded-lg transition-all">
              اكتشف خدماتنا
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gold-500 blur-3xl opacity-20 rounded-full animate-pulse group-hover:opacity-40 transition-opacity"></div>
            <img 
              src="https://scontent.fbgw66-3.fna.fbcdn.net/v/t39.30808-6/624487417_2111898062977008_5258394821347066965_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=hox3eGZkClkQ7kNvwGusMIF&_nc_oc=Ado4NAkPt0UkbtCv7fwpPpJqo_hpUVbQYc0Xjyz8CobH8CsiHf8jA9Ni495QsI1rEqI&_nc_zt=23&_nc_ht=scontent.fbgw66-3.fna&_nc_gid=e4C_01NY0bJ6Yn4hshE4mQ&_nc_ss=7b2a8&oh=00_Af3yM9jqrp95hMXqcWXKq_HsFW3aDIpiK9DfXzhk224Flw&oe=69F429A4" 
              alt="مركز خدمات الأصدقاء" 
              className="relative z-10 w-full max-w-md h-auto rounded-[2.5rem] border-4 border-gold-500/30 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=500&fit=crop";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeading({ subtitle, title, light = false }: { subtitle: string, title: string, light?: boolean }) {
  return (
    <div className="text-center mb-16">
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-3"
      >
        {subtitle}
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-4xl md:text-5xl font-black ${light ? 'text-neutral-900' : 'text-white'}`}
      >
        {title}
      </motion.h2>
      <div className="w-20 h-1.5 bg-gold-500 mx-auto mt-4 rounded-full"></div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden border-2 border-gold-500/20 shadow-2xl">
            <img 
              src="https://artifact.ai.studio/render/07da197b-967a-42bc-90e8-09590e81c01e/workshop_image.png" 
              alt="Garage Workspace" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-black p-8 rounded-2xl border border-gold-500/30 shadow-xl hidden lg:block">
            <div className="text-5xl font-black text-gold-500 mb-1">+10</div>
            <div className="text-sm font-bold text-neutral-400">سنوات من الخبرة <br /> في خدمة السيارات</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-gold-500 font-bold text-sm mb-4">من نحن</h3>
          <h2 className="text-4xl font-black text-white mb-6 leading-tight">
            نحن نجمع بين <span className="text-gold-500">الخبرة العميقة</span> والتقنيات الحديثة
          </h2>
          <p className="text-neutral-400 mb-8 leading-relaxed text-lg">
            شركة خدمات الأصدقاء هي وجهتكم الموثوقة لصيانة سياراتكم. تأسست تحت إدارة **عبدالرحمن الزبيدي** و **أحمد مثنى** بهدف تقديم مستوى جديد من الجودة والشفافية في سوق زيوت المحركات العراقي.
          </p>
          
          <div className="space-y-6">
            {[
              { title: "إدارة محترفة", desc: "بإشراف مباشر من خبراء في مجال المحركات." },
              { title: "أجود المنتجات", desc: "لا نتعامل إلا مع الماركات العالمية الأصلية." },
              { title: "خدمة سريعة", desc: "نحترم وقتكم وننجز المهام بأعلى دقة وفحص متميز." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-gold-500/20 transition-all">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-neutral-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading subtitle="ماذا نقدم" title="خدمات احترافية لسيارتك" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 rounded-3xl bg-neutral-900 border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold-500 flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-lg shadow-gold-500/20">
                <service.icon size={32} className="text-black" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-gold-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="كتالوج المنتجات" title="أفضل أنواع الزيوت العالمية" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-900 rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-gold-500 text-black text-[10px] font-black rounded-full uppercase tracking-widest">
                  Original
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white group-hover:text-gold-500 transition-colors">{product.name}</h4>
                  <span className="text-gold-500 text-sm font-bold">{product.price}</span>
                </div>
                <p className="text-neutral-500 text-xs mb-4">{product.brand} Lubricants</p>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=أريد الاستفسار عن زيت ${product.name}`}
                  className="w-full py-3 border border-gold-500/30 hover:bg-gold-500 hover:text-black text-gold-500 font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  اطلب الآن
                  <MessageSquare size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formStatus, setFormStatus] = useState<null | 'success'>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading subtitle="تواصل معنا" title="دعنا نخدم سيارتك اليوم" />
            <p className="text-neutral-400 mb-12 text-lg leading-relaxed">
              تواصل معنا مباشرة عبر الأرقام المذكورة أو قم بزيارتنا في مقر الشركة. نحن هنا للإجابة على جميع استفساراتكم.
            </p>
            
            <div className="space-y-8 mb-12">
              {CONTACT_NUMBERS.map((num, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500 transition-all duration-300">
                    <Phone className="text-gold-500 group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500 mb-1 font-bold">الهاتف المباشر {i + 1}</div>
                    <a href={`tel:${num}`} className="text-2xl font-black text-white hover:text-gold-500 transition-colors uppercase tracking-widest">{num}</a>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500 transition-all duration-300">
                  <MapPin className="text-gold-500 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500 mb-1 font-bold">العنوان</div>
                  <div className="text-xl font-bold text-white">بغداد - المشتل - شارع المطبك - قرب أمانة بغداد</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex-1 py-4 bg-green-600 hover:bg-green-700 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3">
                <MessageSquare size={20} />
                واتساب مباشر
              </a>
              <a href={`tel:${CONTACT_NUMBERS[0]}`} className="flex-1 py-4 bg-gold-500 hover:bg-gold-600 text-black font-black rounded-2xl transition-all flex items-center justify-center gap-3">
                <Phone size={20} />
                اتصل الآن
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black p-10 rounded-[2.5rem] border border-gold-500/20 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 blur-3xl rounded-full"></div>
            <h3 className="text-2xl font-black text-white mb-8 border-r-4 border-gold-500 pr-4">أرسل لنا رسالة</h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label className="block text-sm font-bold text-neutral-400 mb-2 mr-1">الاسم الكامل</label>
                <input required type="text" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-gold-500 transition-all font-bold" placeholder="أدخل اسمك..." />
              </div>
              <div>
                <label className="block text-sm font-bold text-neutral-400 mb-2 mr-1">رقم الهاتف</label>
                <input required type="tel" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-gold-500 transition-all font-bold" placeholder="07xx xxx xxxx" />
              </div>
              <div>
                <label className="block text-sm font-bold text-neutral-400 mb-2 mr-1">رسالتك</label>
                <textarea required rows={4} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-gold-500 transition-all font-bold resize-none" placeholder="كيف يمكننا مساعدتك؟..."></textarea>
              </div>
              <button disabled={!!formStatus} type="submit" className="w-full py-5 bg-gold-500 hover:bg-gold-600 text-black font-black rounded-2xl transition-all shadow-lg shadow-gold-500/20 transform hover:scale-[1.02] active:scale-[0.98]">
                {formStatus === 'success' ? 'تم الإرسال بنجاح ✓' : 'إرسال الرسالة الآن'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center">
            <Droplets className="text-black" size={28} />
          </div>
          <div>
            <div className="text-xl font-black text-white uppercase tracking-wider">خدمات الأصدقاء</div>
            <div className="text-[10px] text-gold-500 font-black tracking-widest uppercase">Trust & Quality Lubricants</div>
          </div>
        </div>
        
        <div className="text-neutral-500 text-sm font-bold">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لشركة خدمات الأصدقاء
        </div>

        <div className="flex gap-4">
          {[Phone, MessageSquare].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-gold-500 hover:border-gold-500 transition-all">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a 
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
    >
      <MessageSquare size={32} />
      <span className="absolute right-full mr-4 px-4 py-2 bg-black/80 backdrop-blur-md text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
        تحدث معنا واتساب
      </span>
      <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-ping"></span>
    </a>
  );
}

export default function App() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
