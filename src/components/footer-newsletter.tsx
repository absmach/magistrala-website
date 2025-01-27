import { Button } from '@/components/ui/button';
import { footerData } from '@/lib/constants';

export function FooterNewsletter() {
  const { title, subtitle, placeholder, buttonText } = footerData.newsletter;

  return (
    <div className="space-y-4">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
      <form className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder={placeholder}
          className="flex-1 min-w-0 p-2 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button className="bg-blue-800 hover:bg-blue-600 px-4 py-2 text-sm whitespace-nowrap">
          {buttonText}
        </Button>
      </form>
    </div>
  );
}
