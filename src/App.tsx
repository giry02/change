import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import svgPaths from "./imports/svg-ofbuxphacw";

export default function App() {
  const [selectedFilter, setSelectedFilter] = useState("2개");
  const [showModal, setShowModal] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>("card2");

  const filters = ["전체", "없음", "1개", "2개", "3개", "4개", "5개 이상"];

  return (
    <div className="min-h-screen bg-[#f1f3f5] flex flex-col items-center font-['Pretendard']">
      <header className="w-full h-[95px] bg-white/80 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-[43px] border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-[32px]">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-[36px] h-[36px] bg-black rounded-lg shadow-lg flex items-center justify-center"
          >
             <span className="text-white font-bold text-xs">SKT</span>
          </motion.div>
          <nav className="flex gap-[32px]">
            {["진단서", "휴대폰·요금제", "인터넷·Btv", "T우주 구독"].map((item) => (
              <button 
                key={item}
                className={`text-[18px] lg:text-[20px] transition-all relative pb-2 group ${
                  item === "휴대폰·요금제" ? "text-black font-semibold" : "text-gray-500 hover:text-black"
                }`}
              >
                {item}
                {item === "휴대폰·요금제" && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-black rounded-full"
                  />
                )}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-[16px]">
          <div className="relative group">
            <input
              type="text"
              placeholder="010-1234-5678"
              className="w-[210px] h-[48px] px-4 pr-12 border border-gray-200 rounded-xl text-[16px] focus:outline-none focus:ring-2 focus:ring-[#3617ce]/20 focus:border-[#3617ce] transition-all bg-gray-50/50"
            />
            <button className="absolute right-2 top-2 w-[32px] h-[32px] flex items-center justify-center hover:bg-white rounded-lg transition-colors shadow-sm lg:shadow-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d={svgPaths.p17fe1c00} />
              </svg>
            </button>
          </div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-[48px] h-[48px] bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center text-white text-[18px] font-semibold shadow-md cursor-pointer"
          >
            홍
          </motion.div>
          <button className="w-[32px] h-[32px] text-gray-400 hover:text-black transition-colors">
            <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d={svgPaths.p7819800} />
            </svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[24px] w-full max-w-[460px] p-[40px] relative shadow-2xl"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-[24px] right-[24px] w-[32px] h-[32px] text-gray-400 hover:text-black transition-colors"
              >
                <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d={svgPaths.p15284300} />
                </svg>
              </button>
              <h2 className="text-[32px] font-bold mb-[24px] tracking-tight">
                결합할인
              </h2>
              <p className="text-[20px] text-gray-500 leading-relaxed mb-[32px]">
                결합할인 상품에 대한 고객 관점의 <br/>친절한 설명이 이곳에 표시됩니다.
              </p>
              <button 
                onClick={() => setShowModal(false)}
                className="w-full py-4 bg-[#3617ce] text-white rounded-xl font-semibold text-[18px] hover:bg-[#2a12a5] transition-colors shadow-lg shadow-[#3617ce]/20"
              >
                확인
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="w-full max-w-[1440px] px-[43px] py-[48px]">
        <div className="max-w-[1268px] mx-auto">
          <div className="flex items-end justify-between mb-[40px]">
             <div>
                <h1 className="text-[42px] font-bold tracking-tight mb-2">결합할인</h1>
                <p className="text-gray-500 text-lg">나에게 맞는 결합 할인 상품을 찾아보세요.</p>
             </div>
             <button 
                onClick={() => setShowModal(true)}
                className="text-[#3617ce] font-semibold flex items-center gap-1 hover:underline"
             >
                결합할인이란?
             </button>
          </div>

          <div className="mb-[32px] bg-white p-8 rounded-[24px] shadow-sm border border-gray-100 flex flex-col gap-[24px]">
            <div className="flex items-center gap-[24px]">
                <span className="text-[20px] font-semibold text-gray-700 min-w-[100px]">결합 휴대 수</span>
                <div className="flex flex-wrap gap-[10px]">
                {filters.map((filter) => (
                    <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-[24px] py-[12px] rounded-xl border transition-all text-[17px] font-medium ${
                        selectedFilter === filter
                        ? "bg-[#3617ce] text-white border-[#3617ce] shadow-lg shadow-[#3617ce]/20 scale-105"
                        : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                    }`}
                    >
                    {filter}
                    </button>
                ))}
                </div>
            </div>
          </div>

          <div className="mb-[24px] flex items-center justify-between">
            <span className="text-[26px] font-bold">
                검색 결과 <span className="text-[#3617ce]">5개</span>
            </span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-[32px] flex items-center gap-[12px] bg-amber-50 border border-amber-100 px-[20px] py-[14px] rounded-2xl inline-flex shadow-sm"
          >
            <div className="text-amber-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d={svgPaths.p16abbb80} />
                </svg>
            </div>
            <span className="text-[17px] font-medium text-amber-900/80">
              30일 이내 기기변경 후 결합할인 전환 대상입니다.
            </span>
          </motion.div>

          <div className="grid gap-[24px]">
            <ConsultationCard
              id="card1"
              title="요금가족결합"
              badge="이용중"
              description="온가족이 함께 누리는 무선 결합 할인 서비스"
              price="-34,000"
              details="인터넷 대상 -11,000원 ㅣ B tv 대상 -5,000원"
              isExpanded={expandedCard === "card1"}
              onToggle={() => setExpandedCard(expandedCard === "card1" ? null : "card1")}
            />

            <ConsultationCard
              id="card2"
              title="T+B인터넷(개인-패밀리형)"
              description="결합할인 상품에 대한 고객 관점의 친절한 설명"
              price="-22,000"
              dateRange="10년-20년 미만"
              details="인터넷 대상 -11,000원"
              isExpanded={expandedCard === "card2"}
              onToggle={() => setExpandedCard(expandedCard === "card2" ? null : "card2")}
              showDetails
            />
          </div>
        </div>
      </main>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-[40px] right-[40px] bg-[#3617ce] text-white px-[40px] py-[20px] rounded-2xl text-[20px] font-bold shadow-2xl shadow-[#3617ce]/40 z-30"
      >
        적용 (2)
      </motion.button>
    </div>
  );
}

interface ConsultationCardProps {
  id: string;
  title: string;
  badge?: string;
  description: string;
  price: string;
  dateRange?: string;
  details: string;
  isExpanded: boolean;
  onToggle: () => void;
  showDetails?: boolean;
}

function ConsultationCard({
  id,
  title,
  badge,
  description,
  price,
  dateRange,
  details,
  isExpanded,
  onToggle,
  showDetails,
}: ConsultationCardProps) {
  const [selectedPeriod, setSelectedPeriod] = useState("10년-20년미만");

  return (
    <motion.div 
      layout
      className={`bg-white rounded-[28px] border-2 transition-colors overflow-hidden ${
        isExpanded ? "border-[#3617ce] shadow-xl shadow-[#3617ce]/5" : "border-gray-100 shadow-sm"
      }`}
    >
      <div className="p-[32px]">
        <div className="flex items-start justify-between mb-[4px]">
          <div className="flex items-start gap-[20px]">
            <div className="w-[48px] h-[48px] bg-gradient-to-br from-[#3617ce] to-[#5a3ae4] rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-[#3617ce]/20">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d={svgPaths.p19c6c780} />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-[12px] mb-[8px]">
                <h3 className="text-[26px] font-bold tracking-tight">{title}</h3>
                {badge && (
                  <span className="px-[12px] py-[4px] bg-[#f0efff] text-[#3617ce] text-[15px] rounded-lg font-bold">
                    {badge}
                  </span>
                )}
              </div>
              <p className="text-[18px] text-gray-500 font-medium">{description}</p>
            </div>
          </div>
          <div className="text-right">
            {dateRange && (
              <div className="text-[17px] font-semibold text-gray-400 mb-[8px]">{dateRange}</div>
            )}
            <div className="text-[32px] font-black text-[#3617ce] mb-[4px]">
              {price}<span className="text-xl font-bold ml-1">원</span>
            </div>
            <div className="text-[16px] font-medium text-gray-400">{details}</div>
          </div>
        </div>

        <AnimatePresence>
            {showDetails && isExpanded && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="h-[1px] bg-gray-100 my-[32px]" />
                    <div className="space-y-[24px]">
                        <div className="bg-gray-50/80 rounded-2xl p-[28px] border border-gray-100">
                            <h4 className="text-[20px] font-bold mb-[12px]">
                                인터넷 & Btv 결합 할인 계산기
                            </h4>
                            <p className="text-[16px] text-gray-500 mb-[24px] leading-relaxed">
                                결합 기간에 따라 할인 금액이 달라질 수 있습니다. <br/>하단의 기간을 선택하여 정확한 할인 혜택을 확인하세요.
                            </p>
                            <div className="flex flex-wrap gap-[12px]">
                                {["10년 미만", "10년-20년 미만", "20-30년 미만", "30년 이상"].map((period) => (
                                <button
                                    key={period}
                                    onClick={() => setSelectedPeriod(period)}
                                    className={`px-[20px] py-[14px] rounded-xl text-[16px] font-bold border transition-all ${
                                    selectedPeriod === period
                                        ? "bg-[#3617ce] text-white border-[#3617ce] shadow-md shadow-[#3617ce]/20"
                                        : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                                    }`}
                                >
                                    {period}
                                </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        {showDetails && (
          <button
            onClick={onToggle}
            className="w-full flex items-center justify-center py-[16px] text-[18px] text-gray-400 hover:text-black transition-all mt-[20px] border-t border-gray-50"
          >
            <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d={svgPaths.p3cadde00} />
                </svg>
            </motion.div>
          </button>
        )}
      </div>
    </motion.div>
  );
}
