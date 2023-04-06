export interface LecturersData {
  _id: string
  _type: string
  description: string
  email: string
  phoneNumber: string
  specialization: string
  higherInstitutionCert: string
  mastersCert: string
  otherCert: string
  bio: string
  slug: {
    current: string
  }
  subtitle: string
  title: string
  mainImage: {
    asset: object
  }
}

export interface OurExecutives {
  _id: string
  _type: string
  name: string
  title: string
  slug: {
    current: string
  }
  mainImage: {
    asset: object
  }
}