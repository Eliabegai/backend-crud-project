
export class CreateAnimeListDto {
  name?: string
  type?: string
  chapter?: number
  status?: string
  scanName?: string
  scanUrl?: string
  imageUrl?: string
  scan?: {
    name: string
    url: string
  }
}