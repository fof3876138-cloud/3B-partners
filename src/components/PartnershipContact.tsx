import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Send, CheckCircle2, ShieldCheck, Clock, PhoneCall, Mail, Loader2 } from 'lucide-react';

export const PartnershipContact: React.FC = () => {
  const { addInquiry, content } = useSite();
  const [creatorName, setCreatorName] = useState('');
  const [channelUrl, setChannelUrl] = useState('');
  const [partnerType, setPartnerType] = useState('OEM/ODM 정밀 상품제작 의뢰');
  const [category, setCategory] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [targetLaunchDate, setTargetLaunchDate] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!creatorName.trim()) {
      setErrorMsg('파트너 성함, 채널명 또는 회사명을 입력해 주세요.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('유효한 이메일 주소를 입력해 주세요.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('담당자 연락처(휴대폰 번호)를 입력해 주세요.');
      return;
    }

    setIsSubmitting(true);

    const formDataPayload = {
      '파트너명_채널명_회사명': creatorName.trim(),
      '파트너십_유형': partnerType,
      '채널_웹사이트_링크': channelUrl.trim() || '미기재',
      '희망_제품_카테고리': category.trim() || '미기재',
      '회신_이메일': email.trim(),
      '담당자_연락처': phone.trim(),
      '희망_런칭_미팅시기': targetLaunchDate.trim() || '미기재',
      '제안배경_프로젝트개요': message.trim() || '추가 기재 사항 없음',
      _subject: `[3B 파트너스 신규 제안서] ${creatorName.trim()} (${partnerType})`,
    };

    try {
      // Formspree 엔드포인트로 데이터 전송
      const response = await fetch('https://formspree.io/f/mpppnbbn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formDataPayload),
      });

      if (!response.ok) {
        console.warn('Formspree response not ok, proceeding with local fallback:', response.status);
      }
    } catch (err) {
      console.error('Formspree submission error:', err);
    } finally {
      setIsSubmitting(false);
    }

    // 로컬 데이터베이스에도 보관
    addInquiry({
      creatorName: `${creatorName} [${partnerType}]`,
      channelUrl: channelUrl.trim() || '미기재',
      subscriberCount: partnerType,
      category,
      email,
      phone,
      targetLaunchDate,
      message: message.trim() || '추가 기재 사항 없음',
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden text-white">
      {/* Background ambient yellow & pink gradient points */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-[#FFE600]/15 to-[#FF2E93]/15 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-[#FF2E93]/15 to-[#FFE600]/15 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Trust Markers */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.3] tracking-tight break-keep">
              함께 시그니처 브랜드를 완성할<br />
              파트너를 모십니다
            </h2>
            <div className="mt-4 text-sm sm:text-base text-neutral-300 font-medium leading-relaxed break-keep space-y-2">
              <p>
                제조사, 유통사, 크리에이터, 인플루언서<br />
                MCN 에이전시, IP홀더 기업 등<br />
                어떤 형태의 협력도 환영합니다<br />
                모든 가능성을 열어놓고 비즈니스 방향을 협의합니다.
              </p>
              <p>
                3B 파트너스는 철저한 비밀유지(NDA) 하에<br className="hidden sm:inline" />
                최적의 비즈니스 모델과 실물 시제품 계획을 제안합니다.
              </p>
            </div>

            <div className="mt-8 space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-[#FFE600] to-[#FF2E93] text-black shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="text-sm font-black text-white">비밀유지 협약(NDA) 철저 보증</div>
                  <div className="text-xs text-neutral-400 font-medium">제출하신 미공개 기획안 및 아이디어, 협업과정은 법적으로 안전하게 보호됩니다.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-[#FF2E93] to-[#FFE600] text-black shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="text-sm font-black text-white">영업일 기준 24시간 내 회신 보장</div>
                  <div className="text-xs text-neutral-400 font-medium">분야별 전담 디렉터가 1:1로 직접 배정되어 상세 안내를 드립니다.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-[#FFE600] to-[#FF2E93] text-black shrink-0 mt-0.5">
                  <PhoneCall className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="text-sm font-black text-white">직통 상담 채널</div>
                  <div className="text-xs text-[#FFE600] font-black font-mono">
                    {content.contact.phone || '010 5588 6138'} ({content.contact.operatingHours || '24시간 연중무휴 상담'})
                  </div>
                  <a
                    href="mailto:kdk3327@naver.com"
                    className="block text-xs text-[#FFE600] hover:text-[#FFE600]/80 hover:underline font-mono font-bold mt-1 transition-colors"
                  >
                    kdk3327@naver.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#111116] border border-white/15 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FFE600] to-[#FF2E93] flex items-center justify-center mx-auto mb-6 text-black shadow-lg shadow-pink-500/30">
                    <CheckCircle2 className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">
                    파트너십 제안이 성공적으로 접수되었습니다!
                  </h3>
                  <p className="text-sm text-neutral-300 font-medium max-w-md mx-auto mb-4 leading-relaxed">
                    작성해 주신 제안서 내용이 안전하게 접수되었습니다.
                    입력하신 연락처(<span className="text-[#FFE600] font-bold">{phone}</span>)와 이메일(
                    <span className="text-pink-400 font-bold">{email}</span>)로 3B 파트너스 전담 디렉터가
                    영업일 기준 24시간 내에 1:1 회신을 드리겠습니다.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setCreatorName('');
                        setEmail('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="px-6 py-2.5 text-xs font-black !text-black bg-gradient-to-r from-[#FFE600] to-[#FF2E93] rounded-xl hover:opacity-90 transition-all cursor-pointer"
                    >
                      추가 제안서 작성하기
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-sm font-black text-white pb-3 border-b border-white/10 flex items-center justify-between">
                    <span>업무협약(MOU) & 크리에이터 파트너십 제안</span>
                    <span className="text-xs bg-gradient-to-r from-[#FFE600] to-[#FF2E93] px-2 py-0.5 rounded text-black font-black">신속 1:1 디렉터 배정</span>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/40 text-xs text-red-200 font-bold">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white mb-1.5">
                        파트너 성함 / 채널명 / 회사명 <span className="text-[#FF2E93]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={creatorName}
                        onChange={(e) => setCreatorName(e.target.value)}
                        placeholder="예: 크리에이터 루멘, (주)크루 MCN"
                        className="w-full bg-[#181822] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 font-medium focus:outline-none focus:border-[#FFE600] focus:ring-1 focus:ring-[#FFE600]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white mb-1.5">
                        채널 / 회사 웹사이트 링크
                      </label>
                      <input
                        type="text"
                        value={channelUrl}
                        onChange={(e) => setChannelUrl(e.target.value)}
                        placeholder="유튜브, 웹사이트, SNS 링크"
                        className="w-full bg-[#181822] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 font-medium focus:outline-none focus:border-[#FFE600] focus:ring-1 focus:ring-[#FFE600]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white mb-1.5">
                        파트너십 유형
                      </label>
                      <select
                        value={partnerType}
                        onChange={(e) => setPartnerType(e.target.value)}
                        className="w-full bg-[#181822] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white font-bold focus:outline-none focus:border-[#FFE600] cursor-pointer"
                      >
                        <option value="OEM/ODM 정밀 상품제작 의뢰" className="bg-[#181822] text-white">OEM/ODM 정밀 상품제작 의뢰</option>
                        <option value="공동구매 진행" className="bg-[#181822] text-white">공동구매 진행</option>
                        <option value="MCN / 에이전시 업무협약 (MOU)" className="bg-[#181822] text-white">MCN / 에이전시 업무협약 (MOU)</option>
                        <option value="크리에이터 단독 브랜드 빌드업" className="bg-[#181822] text-white">크리에이터 단독 브랜드 빌드업</option>
                        <option value="IP 라이선싱 콜라보레이션" className="bg-[#181822] text-white">IP 라이선싱 콜라보레이션</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white mb-1.5">
                        희망 제품 카테고리
                      </label>
                      <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="예: 의류,식품,화장품,가구제작 등 직접입력"
                        className="w-full bg-[#181822] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 font-medium focus:outline-none focus:border-[#FFE600] focus:ring-1 focus:ring-[#FFE600]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white mb-1.5">
                        회신받을 이메일 <span className="text-[#FF2E93]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="contact@partner.com"
                        className="w-full bg-[#181822] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 font-medium focus:outline-none focus:border-[#FFE600] focus:ring-1 focus:ring-[#FFE600]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white mb-1.5">
                        담당자 직통 연락처 <span className="text-[#FF2E93]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="010-0000-0000"
                        className="w-full bg-[#181822] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 font-medium focus:outline-none focus:border-[#FFE600] focus:ring-1 focus:ring-[#FFE600]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white mb-1.5">
                      예상 런칭 또는 미팅 희망 시기
                    </label>
                    <input
                      type="text"
                      value={targetLaunchDate}
                      onChange={(e) => setTargetLaunchDate(e.target.value)}
                      placeholder="예: 올해 하반기 출시희망, 명절맞이 이벤트 프로젝트, 즉시미팅 희망 등"
                      className="w-full bg-[#181822] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 font-medium focus:outline-none focus:border-[#FFE600] focus:ring-1 focus:ring-[#FFE600]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white mb-1.5">
                      제안 배경 및 프로젝트 개요
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={`※ 별도의 아이디어가 없어도 괜찮습니다 간략한 형태의 구상하고계신 협업문의를 남겨주세요.\n※ 희망 브랜드 콘셉트, 제품 아이디어, 대략적인 수량 등의 가이드가 있다면 자유롭게 적어주세요.`}
                      className="w-full bg-[#181822] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 font-medium focus:outline-none focus:border-[#FFE600] focus:ring-1 focus:ring-[#FFE600] resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-sm font-black !text-black bg-gradient-to-r from-[#FFE600] via-[#FFD000] to-[#FF2E93] hover:opacity-95 disabled:opacity-75 rounded-xl transition-all shadow-lg shadow-pink-500/20 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 !text-black animate-spin stroke-[2.5]" />
                        <span className="!text-black text-sm font-black tracking-tight">제안서 안전하게 전송 중...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 !text-black stroke-[2.5]" />
                        <span className="!text-black text-sm font-black tracking-tight">파트너십 제안서 접수하기</span>
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-center text-neutral-400 font-medium">
                    접수된 제안서는 담당 디렉터에게 즉시 전달되며, 기재해 주신 연락처로 신속히 회신드립니다.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
