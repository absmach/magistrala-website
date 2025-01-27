import { footerData } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import Image from 'next/image';

export function FooterCompanyInfo() {
  const { logo, name, description } = footerData.companyInfo;

  return (
    <div className="space-y-4 max-w-sm">
      <Image
        src={getImageUrl(logo)}
        alt={`${name} Logo`}
        width={200}
        height={200}
      />
      {/* <h3 className="text-xl font-bold tracking-tight">{name}</h3> */}
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
