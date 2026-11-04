import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'
//
import SideBarExternalLink from '@/components/side-bar-external-link'

const SPONSOR_URL = 'https://github.com/sponsors/emreerdendev'
const BUY_ME_A_COFFEE_URL = 'https://www.buymeacoffee.com/emreerdendev'

const SponsorComponent = () => {
  return (
    <div className="Sponsor">
      <div className="Side-Bar-Title">Support Me!</div>

      <SideBarExternalLink
        href={SPONSOR_URL}
        icon={<FaHeart />}
        iconClassName="text-base"
        label="Sponsor"
        meta="GitHub"
        className="text-[#5fd37f]"
      />

      <SideBarExternalLink
        href={BUY_ME_A_COFFEE_URL}
        icon={
          // Served as-is from Buy Me a Coffee's CDN: unoptimized keeps it out
          // of Cloudflare Images (no billable transformations).
          <Image
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me a Coffee"
            width={100}
            height={28}
            unoptimized
          />
        }
        meta="Buy Me a Coffee"
      />
    </div>
  )
}

export default SponsorComponent
