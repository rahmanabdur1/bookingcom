export interface CommunityItem {
  title: string
  desc: string
  img: string
}

export interface SponsoredItem extends CommunityItem {
  buttonText: string
}
