// cards/planCard.tsx
import Link from 'next/link';

export default function PlanCard({ content }: { content: any }) {
  return (
    <div className={`border-2 border-black rounded-lg p-6 flex flex-col h-full ${content.disabled ? 'opacity-50' : ''}`}>
      <h3 className="mb-2 text-2xl font-bold">{content.title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-black">{content.price}</span>
        <span className="text-gray-600">/{content.type}</span>
        {content.yearlyPrice && content.type === 'month' && (
          <div className="text-sm text-gray-600">or {content.yearlyPrice}/year</div>
        )}
        {content.monthlyPrice && content.type === 'year' && (
          <div className="text-sm text-gray-600">{content.monthlyPrice} equivalent</div>
        )}
      </div>
      
      <ul className="flex-grow mb-6 space-y-2">
        {content.features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start text-sm">
            <span className="mr-2">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      {!content.disabled ? (
        <Link 
          href={content.stripeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 font-bold text-center text-white transition-colors bg-black rounded-lg hover:bg-gray-800"
        >
          {content.cta}
        </Link>
      ) : (
        <button 
          disabled
          className="px-6 py-3 font-bold text-gray-500 bg-gray-300 rounded-lg cursor-not-allowed"
        >
          Coming Soon
        </button>
      )}
    </div>
  );
}