'use client'

import { useState, useMemo } from 'react'
import { Search, Download, ChevronLeft, ChevronRight } from 'lucide-react'

interface CustomerRecord {
  sno: number
  name: string
  overview: string
  vertical: string
  revenue: string
  size: string
  contact: string
  designation: string
  email: string
  phone: string
  linkedin: string
  website: string
  criteria: string
  painPoints: string
  triggers: string
  budgetOwner: string
  procurementModel: string
  engagementType: string
  solutionType: string
  deploymentModel: string
  performanceExpectations: string
  benchmarkSummary: string
  cmiNotes: string
}

const DEMO_CUSTOMERS: CustomerRecord[] = [
  {
    sno: 1,
    name: 'Majid Al Futtaim Retail LLC',
    overview: 'Leading UAE-based retail and hospitality conglomerate operating 30+ shopping malls and 500+ stores across 17 MENA markets including Carrefour, VOX Cinemas, and Magic Planet',
    vertical: 'Shopping Malls, Retail',
    revenue: '$4,500',
    size: 'Enterprise Group',
    contact: 'Ahmed Al Rashidi',
    designation: 'Chief Marketing Officer',
    email: 'a.rashidi@maf.ae',
    phone: '+971 4 294 9999',
    linkedin: 'linkedin.com/in/ahmed-al-rashidi',
    website: 'www.majidalfuttaim.com',
    criteria: 'Brand-Fit Playlists, Multi-Location Control, Centralized Reporting, Customer Experience Enhancement',
    painPoints: 'Inconsistent Brand Experience across 500+ stores, Manual Music Control, Copyright Risk',
    triggers: 'Mall Expansions in Saudi Arabia, Brand Refresh Programs 2025, Digital Customer Experience Initiatives',
    budgetOwner: 'Brand Manager, Retail Director',
    procurementModel: 'Regional Framework Contract',
    engagementType: 'Multi-Location Rollout, Annual Contract',
    solutionType: 'Licensed Background Music Service, Custom Playlist Management',
    deploymentModel: 'Centralized Multi-Site Dashboard, Cloud-Based Music Platform',
    performanceExpectations: 'Multi-Branch Control, Scheduled Daypart Music, Playlist Customization, Legal Music Use',
    benchmarkSummary: 'High-value enterprise client; estimated 1,200+ licensed locations across MENA; strong preference for regional Arabic content integration alongside international tracks',
    cmiNotes: 'Priority account — decision-maker aligned with Group CMO; RFP expected Q3 2025'
  },
  {
    sno: 2,
    name: 'Alshaya Group',
    overview: 'Kuwaiti multinational franchise operator managing 70+ international retail and food brands including Starbucks, H&M, Mothercare, and The Cheesecake Factory across MENA',
    vertical: 'Retail, Foodservice, Hospitality',
    revenue: '$2,800',
    size: 'Enterprise Group',
    contact: 'Fatima Al Sayed',
    designation: 'Head of Customer Experience',
    email: 'f.alsayed@alshaya.com',
    phone: '+965 2240 8000',
    linkedin: 'linkedin.com/in/fatima-alsayed',
    website: 'www.alshaya.com',
    criteria: 'Music Licensing Compliance, Brand-Fit Playlists, Multi-Location Control, Local / Regional Music Support',
    painPoints: 'Copyright Risk from unlicensed streams, Generic Playlists not matching brand identity, High Licensing Complexity across 70+ brands',
    triggers: 'Franchise Growth, New Store Openings in KSA, Guest Experience Upgrades',
    budgetOwner: 'Brand Manager, Operations Manager',
    procurementModel: 'Franchise-Level Agreement',
    engagementType: 'Annual Contract, Multi-Location Rollout',
    solutionType: 'Licensed Background Music Service, Branded Radio, Custom Playlist Management',
    deploymentModel: 'Cloud-Based Music Platform, App-Based Control',
    performanceExpectations: 'Legal Music Use, Playlist Customization, Consistent Audio Quality, Simple User Interface',
    benchmarkSummary: 'Complex multi-brand account requiring brand-specific playlist profiles per franchise; licensing must cover all MENA territories',
    cmiNotes: 'Procurement led centrally from Kuwait HQ; requires multi-brand licensing structure'
  },
  {
    sno: 3,
    name: 'Emaar Hospitality Group',
    overview: 'UAE-based hospitality arm of Emaar Properties operating Address Hotels, Vida Hotels, Rove Hotels, and Armani Hotel Dubai across MENA',
    vertical: 'Hotels & Resorts, Hospitality',
    revenue: '$1,200',
    size: 'Large Multi-Location Brand',
    contact: 'Sara Al Mansouri',
    designation: 'VP – Guest Experience & Brand Standards',
    email: 's.almansouri@emaar.ae',
    phone: '+971 4 367 8888',
    linkedin: 'linkedin.com/in/sara-almansouri',
    website: 'www.emaar.com/hospitality',
    criteria: 'Sonic Identity / Original Brand Music, Brand-Fit Playlists, Customer Experience Enhancement, Centralized Reporting',
    painPoints: 'Generic Playlists undermining luxury positioning, Inconsistent Brand Experience across hotel brands, Poor Audio Quality in lobby areas',
    triggers: 'Hotel Renovations, New Property Openings, Guest Experience Upgrades, Brand Refresh Programs',
    budgetOwner: 'Hospitality General Manager, Marketing Head',
    procurementModel: 'Vendor Contract, Multi-Location Rollout',
    engagementType: 'Long-Term Managed Service Agreement',
    solutionType: 'Licensed Background Music Service, Custom Playlist Management, Sonic Identity / Original Brand Music',
    deploymentModel: 'On-Site Audio System Integration, Centralized Multi-Site Dashboard',
    performanceExpectations: 'Consistent Audio Quality, Playlist Customization, Scheduled Daypart Music, Multi-Branch Control',
    benchmarkSummary: 'Premium hospitality client with distinct sonic identity requirements per brand (Address = luxury, Rove = urban casual); bespoke curation is key differentiator',
    cmiNotes: 'Evaluation process involves F&B and Rooms divisions; pilot recommended at Vida Hotels first'
  },
  {
    sno: 4,
    name: 'Americana Restaurants Group',
    overview: 'Saudi Arabia-based QSR and casual dining operator with 2,000+ outlets across 12 MENA countries including KFC, Pizza Hut, Hardees, TGI Fridays, and Long John Silver\'s',
    vertical: 'Restaurants, Cafes & Bars, Foodservice',
    revenue: '$1,800',
    size: 'Enterprise Group',
    contact: 'Mohammed Al Otaibi',
    designation: 'Regional Marketing Director – MENA',
    email: 'm.alotaibi@americana.com',
    phone: '+966 11 456 7890',
    linkedin: 'linkedin.com/in/mohammed-alotaibi',
    website: 'www.americana.com',
    criteria: 'Music Licensing Compliance, Low Subscription Cost, Easy Scheduling, Multi-Location Control',
    painPoints: 'Copyright Risk, Manual Music Control across 2,000+ locations, High Licensing Complexity, Limited Arabic / Regional Content',
    triggers: 'New Store Openings, Franchise Growth, Brand Refresh Programs',
    budgetOwner: 'Operations Manager, Procurement Manager',
    procurementModel: 'Franchise-Level Agreement, Regional Framework Contract',
    engagementType: 'Annual Contract, Multi-Location Rollout',
    solutionType: 'Licensed Background Music Service, In-Store Radio / Branded Radio, Audio Advertising Announcements',
    deploymentModel: 'Cloud-Based Music Platform, App-Based Control',
    performanceExpectations: 'Legal Music Use, Reliable Streaming, Simple User Interface, Scheduled Daypart Music',
    benchmarkSummary: 'High-volume QSR account; needs cost-effective per-location pricing model; promotional audio announcements are key use case during peak hours',
    cmiNotes: 'Budget approval at regional ops level; pilot across 50 KFC outlets in KSA recommended'
  },
  {
    sno: 5,
    name: 'Landmark Group',
    overview: 'Dubai-based retail conglomerate operating Centrepoint, Home Centre, Splash, Max Fashion and Babyshop across 21 MENA countries with 2,200+ stores',
    vertical: 'Retail, Shopping Malls',
    revenue: '$2,100',
    size: 'Enterprise Group',
    contact: 'Priya Nair',
    designation: 'Director of Brand & Customer Experience',
    email: 'p.nair@landmark.ae',
    phone: '+971 4 222 3333',
    linkedin: 'linkedin.com/in/priya-nair-landmark',
    website: 'www.landmarkgroup.com',
    criteria: 'Brand-Fit Playlists, Multi-Location Control, Low Subscription Cost, Centralized Reporting',
    painPoints: 'Inconsistent Brand Experience, Generic Playlists, Manual Music Control across 2,200+ stores',
    triggers: 'Brand Refresh Programs, New Store Openings, Digital Customer Experience Initiatives',
    budgetOwner: 'Brand Manager, Retail Director',
    procurementModel: 'Regional Framework Contract',
    engagementType: 'Multi-Location Rollout, Annual Contract',
    solutionType: 'Licensed Background Music Service, Custom Playlist Management',
    deploymentModel: 'Centralized Multi-Site Dashboard, Cloud-Based Music Platform',
    performanceExpectations: 'Multi-Branch Control, Playlist Customization, Scheduled Daypart Music, Consistent Audio Quality',
    benchmarkSummary: 'Cost-conscious enterprise buyer; segment-specific playlists needed (children\'s store vs fashion vs home); pan-MENA licensing coverage essential',
    cmiNotes: 'Group procurement based in Dubai; multi-brand trial across Centrepoint and Splash recommended'
  },
  {
    sno: 6,
    name: 'Rotana Hotels & Resorts',
    overview: 'Abu Dhabi-based hotel management company operating 100+ properties across 25 MENA and African countries under Rotana, Centro, Rayhaan, and Arjaan brands',
    vertical: 'Hotels & Resorts, Hospitality',
    revenue: '$980',
    size: 'Large Multi-Location Brand',
    contact: 'Khaled Al Hamad',
    designation: 'General Manager – Brand Experience',
    email: 'k.alhamad@rotana.com',
    phone: '+971 2 697 9000',
    linkedin: 'linkedin.com/in/khaled-alhamad',
    website: 'www.rotana.com',
    criteria: 'Brand-Fit Playlists, Customer Experience Enhancement, Centralized Reporting, Music Licensing Compliance',
    painPoints: 'Generic Playlists, Copyright Risk, Inconsistent Brand Experience across brands',
    triggers: 'Hotel Renovations, New Property Openings, Brand Refresh Programs',
    budgetOwner: 'Hospitality General Manager, Marketing Head',
    procurementModel: 'Vendor Contract',
    engagementType: 'Annual Contract, Long-Term Managed Service Agreement',
    solutionType: 'Licensed Background Music Service, Custom Playlist Management',
    deploymentModel: 'Centralized Multi-Site Dashboard, On-Site Audio System Integration',
    performanceExpectations: 'Consistent Audio Quality, Scheduled Daypart Music, Legal Music Use, Offline Playback',
    benchmarkSummary: 'Mid-tier to premium hospitality; requires differentiated playlists per brand tier; F&B areas (lobby bar, restaurants) are primary use cases',
    cmiNotes: 'Contact at corporate brand level; property-level GMs also influence; Group Contract preferred'
  },
  {
    sno: 7,
    name: 'LuLu Group International',
    overview: 'Abu Dhabi-based hypermarket and retail chain operator with 240+ LuLu Hypermarkets, shopping malls, and food courts across 22 MENA and Asian countries',
    vertical: 'Retail Stores & Supermarkets, Shopping Malls',
    revenue: '$7,400',
    size: 'Enterprise Group',
    contact: 'Rajan Menon',
    designation: 'Head of In-Store Customer Experience',
    email: 'r.menon@lulugroupintl.com',
    phone: '+971 2 449 2222',
    linkedin: 'linkedin.com/in/rajan-menon-lulu',
    website: 'www.luluhypermarket.com',
    criteria: 'Music Licensing Compliance, Easy Scheduling, Low Subscription Cost, Multi-Location Control',
    painPoints: 'Copyright Risk, Generic Playlists, High Licensing Complexity, Limited Arabic / Regional Content',
    triggers: 'New Store Openings, Mall Expansions, Digital Customer Experience Initiatives',
    budgetOwner: 'Operations Manager, Procurement Manager',
    procurementModel: 'Regional Framework Contract',
    engagementType: 'Annual Contract, Multi-Location Rollout',
    solutionType: 'Licensed Background Music Service, In-Store Radio / Branded Radio, Audio Advertising Announcements',
    deploymentModel: 'Cloud-Based Music Platform, Centralized Multi-Site Dashboard',
    performanceExpectations: 'Legal Music Use, Reliable Streaming, Simple User Interface, Multi-Branch Control',
    benchmarkSummary: 'Price-sensitive high-volume account; strong demand for Arabic and South Asian music to match customer demographics; in-store promotional announcements are critical',
    cmiNotes: 'Procurement-driven; requires competitive pricing per location; pilot in UAE stores before regional rollout'
  },
  {
    sno: 8,
    name: 'Jarir Bookstore Company',
    overview: 'Riyadh-based retail chain with 80+ stores across Saudi Arabia and MENA specializing in books, electronics, art supplies and stationery; publicly listed on Tadawul',
    vertical: 'Retail Stores & Supermarkets',
    revenue: '$1,100',
    size: 'Large Multi-Location Brand',
    contact: 'Abdullah Al Jarallah',
    designation: 'VP – Store Operations & Customer Experience',
    email: 'a.jarallah@jarir.com',
    phone: '+966 11 463 2222',
    linkedin: 'linkedin.com/in/abdullah-aljarallah',
    website: 'www.jarir.com',
    criteria: 'Brand-Fit Playlists, Music Licensing Compliance, Easy Scheduling, Low Subscription Cost',
    painPoints: 'Copyright Risk, Generic Playlists not matching relaxed study/browse ambiance, Manual Music Control',
    triggers: 'New Store Openings, Brand Refresh Programs, Guest Experience Upgrades',
    budgetOwner: 'Retail Director, Operations Manager',
    procurementModel: 'Direct Subscription',
    engagementType: 'Annual Contract',
    solutionType: 'Licensed Background Music Service, Custom Playlist Management',
    deploymentModel: 'Cloud-Based Music Platform, App-Based Control',
    performanceExpectations: 'Legal Music Use, Playlist Customization, Simple User Interface, Scheduled Daypart Music',
    benchmarkSummary: 'Conservative brand requiring calm instrumental and ambient music; Arabic poetry and soft regional music segments important for KSA market positioning',
    cmiNotes: 'Budget owner at VP-Ops level; straightforward subscription model preferred; no in-store announcements required initially'
  },
  {
    sno: 9,
    name: 'Fitness Time Saudi Arabia',
    overview: 'Saudi Arabia\'s largest fitness chain with 300+ gyms across the Kingdom operating under Fitness Time, Fitness Time Ladies, and Spectrum Health Club brands',
    vertical: 'Gyms, Spas & Wellness Centers',
    revenue: '$320',
    size: 'Large Multi-Location Brand',
    contact: 'Noura Al Zahrani',
    designation: 'Brand & Marketing Manager',
    email: 'n.alzahrani@fitnesstime.com.sa',
    phone: '+966 11 289 5000',
    linkedin: 'linkedin.com/in/noura-alzahrani',
    website: 'www.fitnesstime.com.sa',
    criteria: 'Brand-Fit Playlists, Easy Scheduling, Multi-Location Control, Local / Regional Music Support',
    painPoints: 'Generic Playlists not energizing for workout, Manual Music Control, Inconsistent Brand Experience, Limited Arabic Workout Music',
    triggers: 'New Gym Openings, Brand Refresh Programs, Digital Customer Experience Initiatives',
    budgetOwner: 'Marketing Head, Operations Manager',
    procurementModel: 'Direct Subscription, Regional Framework Contract',
    engagementType: 'Monthly Subscription, Annual Contract',
    solutionType: 'Licensed Background Music Service, Custom Playlist Management, In-Store Radio / Branded Radio',
    deploymentModel: 'App-Based Control, Cloud-Based Music Platform',
    performanceExpectations: 'Reliable Streaming, Playlist Customization, Scheduled Daypart Music, Simple User Interface',
    benchmarkSummary: 'Energy-focused playlists critical; ladies-only clubs require separate culturally appropriate playlist profiles; high-frequency playlist refresh needed (weekly)',
    cmiNotes: 'Fast-growing fitness vertical in KSA; post-Vision 2030 lifestyle push driving rapid expansion; seasonal offers recommended during Ramadan'
  },
  {
    sno: 10,
    name: 'Dr. Sulaiman Al Habib Medical Group',
    overview: 'Saudi Arabia-listed hospital group (HMG) operating 20+ hospitals, 30+ medical centers and pharmacies across Saudi Arabia, UAE, Egypt and Bahrain',
    vertical: 'Healthcare Facilities',
    revenue: '$2,600',
    size: 'Large Multi-Location Brand',
    contact: 'Dr. Waleed Khouri',
    designation: 'Director of Patient Experience',
    email: 'w.khouri@hmg.com.sa',
    phone: '+966 11 299 9999',
    linkedin: 'linkedin.com/in/waleed-khouri-hmg',
    website: 'www.hmg.com',
    criteria: 'Music Licensing Compliance, Customer Experience Enhancement, Easy Scheduling, Music-on-Hold / Telephony Audio',
    painPoints: 'High Licensing Complexity, Generic Playlists not appropriate for clinical settings, Poor Audio Quality in waiting areas, Lack of Remote Management',
    triggers: 'New Hospital Openings, Patient Experience Upgrade Programs, Digital Healthcare Initiatives',
    budgetOwner: 'Operations Manager, IT / Facilities Manager',
    procurementModel: 'Vendor Contract',
    engagementType: 'Annual Contract, Long-Term Managed Service Agreement',
    solutionType: 'Licensed Background Music Service, Music-on-Hold / Telephony Audio, Custom Playlist Management',
    deploymentModel: 'On-Site Audio System Integration, Hybrid Remote and On-Premise Setup',
    performanceExpectations: 'Legal Music Use, Consistent Audio Quality, Reliable Streaming, Offline Playback',
    benchmarkSummary: 'Sensitive environment requiring calm, non-intrusive instrumental music; telephony on-hold music is critical touchpoint; HIPAA/PDPL compliance context relevant',
    cmiNotes: 'IT and Facilities sign off on deployment; patient experience board oversees content approval; Ramadan-specific content required'
  },
  {
    sno: 11,
    name: 'The Ritz-Carlton MENA Portfolio',
    overview: 'Collection of 8 ultra-luxury Ritz-Carlton properties across Saudi Arabia, UAE, Bahrain, Egypt and Qatar under Marriott International management',
    vertical: 'Hotels & Resorts, Hospitality',
    revenue: '$560',
    size: 'Mid-Size Regional Chain',
    contact: 'Isabelle Dupont',
    designation: 'Area Director of Marketing – MENA Luxury',
    email: 'i.dupont@ritzcarlton.com',
    phone: '+971 4 399 4000',
    linkedin: 'linkedin.com/in/isabelle-dupont-ritz',
    website: 'www.ritzcarlton.com',
    criteria: 'Sonic Identity / Original Brand Music, Customer Experience Enhancement, Brand-Fit Playlists, Music Licensing Compliance',
    painPoints: 'Generic Playlists inconsistent with ultra-luxury positioning, Copyright Risk, Inconsistent Brand Experience',
    triggers: 'Hotel Renovations, Brand Experience Audits, New Property Openings in NEOM area',
    budgetOwner: 'Hospitality General Manager, Marketing Head',
    procurementModel: 'Vendor Contract, Long-Term Managed Service Agreement',
    engagementType: 'Annual Contract, Long-Term Managed Service Agreement',
    solutionType: 'Licensed Background Music Service, Sonic Identity / Original Brand Music, Custom Playlist Management',
    deploymentModel: 'On-Site Audio System Integration, Centralized Multi-Site Dashboard',
    performanceExpectations: 'Consistent Audio Quality, Playlist Customization, Legal Music Use, Offline Playback',
    benchmarkSummary: 'Ultra-premium segment requiring bespoke sonic identity with live music elements; separate curation per outlet (lobby, spa, restaurant, pool); no streaming gaps acceptable',
    cmiNotes: 'Decision aligned with Marriott MENA regional team; bespoke proposal required with sample curations per outlet type'
  },
  {
    sno: 12,
    name: 'Chalhoub Group',
    overview: 'UAE-based luxury retail and distribution group managing 600+ stores and 500+ brands including Louis Vuitton, Sephora, Christian Dior and Level Shoes across MENA',
    vertical: 'Retail Stores & Supermarkets, Shopping Malls',
    revenue: '$3,200',
    size: 'Enterprise Group',
    contact: 'Elias Haddad',
    designation: 'Group Customer Experience Director',
    email: 'e.haddad@chalhoubgroup.com',
    phone: '+971 4 444 9999',
    linkedin: 'linkedin.com/in/elias-haddad-chalhoub',
    website: 'www.chalhoubgroup.com',
    criteria: 'Sonic Identity / Original Brand Music, Brand-Fit Playlists, Music Licensing Compliance, Customer Experience Enhancement',
    painPoints: 'Copyright Risk, Generic Playlists undermining luxury brand positioning, High Licensing Complexity for 500+ brands',
    triggers: 'New Store Openings, Brand Refresh Programs, Digital Customer Experience Initiatives',
    budgetOwner: 'Brand Manager, Marketing Head',
    procurementModel: 'Vendor Contract, Regional Framework Contract',
    engagementType: 'Annual Contract, Multi-Location Rollout',
    solutionType: 'Licensed Background Music Service, Sonic Identity / Original Brand Music, Custom Playlist Management',
    deploymentModel: 'Cloud-Based Music Platform, Centralized Multi-Site Dashboard',
    performanceExpectations: 'Playlist Customization, Legal Music Use, Consistent Audio Quality, Multi-Branch Control',
    benchmarkSummary: 'Premium luxury retail with strict brand standards; each brand partner (LV, Dior, etc.) may require brand-approved music; group licensing framework needed',
    cmiNotes: 'Complex stakeholder structure — Group CX + individual brand managers; phased onboarding recommended starting with Sephora MENA'
  },
  {
    sno: 13,
    name: 'Saudi Telecom Company (STC)',
    overview: 'Saudi Arabia\'s leading telecom operator with 1,000+ retail stores, corporate offices, and customer service centers across KSA and regional MENA operations',
    vertical: 'Corporate Offices & Workspaces, Retail Stores & Supermarkets',
    revenue: '$14,000',
    size: 'Enterprise Group',
    contact: 'Tariq Al Ghamdi',
    designation: 'Head of Retail Experience & Ambience',
    email: 't.alghamdi@stc.com.sa',
    phone: '+966 11 464 1801',
    linkedin: 'linkedin.com/in/tariq-alghamdi-stc',
    website: 'www.stc.com.sa',
    criteria: 'Music Licensing Compliance, Multi-Location Control, Music-on-Hold / Telephony Audio, Centralized Reporting',
    painPoints: 'High Licensing Complexity, Copyright Risk, Generic Playlists in stores, Lack of Remote Management for 1,000+ locations',
    triggers: 'Store Refurbishment Programs, Digital Transformation Initiative, Customer Journey Upgrade 2025',
    budgetOwner: 'Retail Director, IT / Facilities Manager',
    procurementModel: 'Regional Framework Contract, Vendor Contract',
    engagementType: 'Multi-Location Rollout, Annual Contract',
    solutionType: 'Licensed Background Music Service, Music-on-Hold / Telephony Audio, In-Store Radio / Branded Radio',
    deploymentModel: 'Centralized Multi-Site Dashboard, Cloud-Based Music Platform',
    performanceExpectations: 'Multi-Branch Control, Legal Music Use, Reliable Streaming, Simple User Interface',
    benchmarkSummary: 'High-prestige government-linked enterprise; telephony on-hold is primary requirement for call center operations; retail store ambience is secondary',
    cmiNotes: 'Government procurement rules apply; STC Procurement team manages vendor selection; compliance and SAR pricing required'
  },
  {
    sno: 14,
    name: 'Dubai Airports (DAFZA / dnata)',
    overview: 'Dubai-based airports authority operating Dubai International (DXB) and Al Maktoum International airports serving 85M+ annual passengers with 200+ commercial outlets',
    vertical: 'Airports & Transportation Hubs',
    revenue: '$2,900',
    size: 'Enterprise Group',
    contact: 'Hana Al Marzouqi',
    designation: 'Director – Passenger Experience',
    email: 'h.almarzouqi@dubaiairports.ae',
    phone: '+971 4 224 5555',
    linkedin: 'linkedin.com/in/hana-almarzouqi',
    website: 'www.dubaiairports.ae',
    criteria: 'Music Licensing Compliance, Easy Scheduling, Centralized Reporting, Customer Experience Enhancement',
    painPoints: 'Copyright Risk, Generic Playlists not reflecting Dubai brand identity, High Licensing Complexity across zones',
    triggers: 'Terminal Expansion (T4), Brand Refresh Programs, Passenger Experience Upgrades',
    budgetOwner: 'Operations Manager, Marketing Head',
    procurementModel: 'Vendor Contract, Project-Based Deployment',
    engagementType: 'Long-Term Managed Service Agreement',
    solutionType: 'Licensed Background Music Service, Background Music System Integration, In-Store Radio / Branded Radio',
    deploymentModel: 'On-Site Audio System Integration, Hybrid Remote and On-Premise Setup',
    performanceExpectations: 'Legal Music Use, Consistent Audio Quality, Reliable Streaming, Offline Playback',
    benchmarkSummary: 'Complex deployment requiring zone-based music profiles (Departure, Arrivals, Retail, F&B, VIP Lounges); regulatory approvals needed for public broadcast',
    cmiNotes: 'Infrastructure-level decision; involves Facilities, IT and Commercial teams; long procurement lead time (12–18 months)'
  },
  {
    sno: 15,
    name: 'Al Shaya Wellness & Spa Division',
    overview: 'Kuwait/UAE-based wellness group operating 80+ Hammam, Balance Health Club, and Satori Spa locations across MENA within the Alshaya Group portfolio',
    vertical: 'Gyms, Spas & Wellness Centers',
    revenue: '$145',
    size: 'Mid-Size Regional Chain',
    contact: 'Layla Hassan',
    designation: 'Wellness Brand Experience Manager',
    email: 'l.hassan@alshaya.com',
    phone: '+965 2240 8050',
    linkedin: 'linkedin.com/in/layla-hassan-wellness',
    website: 'www.alshaya.com/wellness',
    criteria: 'Brand-Fit Playlists, Customer Experience Enhancement, Easy Scheduling, Music Licensing Compliance',
    painPoints: 'Generic Playlists not fitting spa/wellness ambiance, Copyright Risk, Poor Audio Quality',
    triggers: 'New Spa Openings, Guest Experience Upgrades, Brand Refresh Programs',
    budgetOwner: 'Marketing Head, Hospitality General Manager',
    procurementModel: 'Vendor Contract, Direct Subscription',
    engagementType: 'Annual Contract, Pilot Program',
    solutionType: 'Licensed Background Music Service, Custom Playlist Management',
    deploymentModel: 'Cloud-Based Music Platform, On-Site Audio System Integration',
    performanceExpectations: 'Consistent Audio Quality, Playlist Customization, Legal Music Use, Offline Playback',
    benchmarkSummary: 'Premium wellness segment requiring calm, therapeutic playlists (meditation, spa, nature sounds); cultural sensitivity for Arabic market essential; Ramadan programming needed',
    cmiNotes: 'Can be bundled with Alshaya Group contract; separate playlist curation brief required for spa vs gym zones'
  }
]

const SECTION_COLORS = {
  customerInfo: { bg: '#1F3864', text: '#ffffff' },
  contactDetails: { bg: '#1E4D2B', text: '#ffffff' },
  professionalDrivers: { bg: '#7B2C2C', text: '#ffffff' },
  purchasingBehaviour: { bg: '#4A2D6F', text: '#ffffff' },
  solutionRequirements: { bg: '#1A4A5C', text: '#ffffff' },
  cmiInsights: { bg: '#3D3D00', text: '#ffffff' },
}

type PropositionType = 'basic' | 'advance' | 'premium'

interface Column {
  key: keyof CustomerRecord
  label: string
  shortLabel: string
  tooltip: string
  width: number
  section: keyof typeof SECTION_COLORS
}

const BASE_COLUMNS: Column[] = [
  // Customer Information
  { key: 'name', label: 'Customer Name / Company Name', shortLabel: 'Customer Name', tooltip: 'Company or brand name', width: 200, section: 'customerInfo' },
  { key: 'overview', label: 'Business Overview', shortLabel: 'Overview', tooltip: 'Brief description of the business', width: 240, section: 'customerInfo' },
  { key: 'vertical', label: 'Industry Vertical', shortLabel: 'Vertical', tooltip: 'Retail, Hospitality, Foodservice, Shopping Malls, Fitness & Wellness, Healthcare, Airports, Corporate Offices, Entertainment Venues, Education & Public Facilities', width: 180, section: 'customerInfo' },
  { key: 'revenue', label: 'Total Annual Revenue (US$ Mn)', shortLabel: 'Revenue (US$Mn)', tooltip: 'Estimated annual revenue in USD Million', width: 150, section: 'customerInfo' },
  { key: 'size', label: 'Customer Size / Scale', shortLabel: 'Size', tooltip: 'Independent Outlet, Mid-Size Regional Chain, Large Multi-Location Brand, Enterprise Group', width: 180, section: 'customerInfo' },
  // Contact Details
  { key: 'contact', label: 'Key Contact Person', shortLabel: 'Contact Person', tooltip: 'Primary decision-maker or influencer', width: 160, section: 'contactDetails' },
  { key: 'designation', label: 'Designation / Role', shortLabel: 'Designation', tooltip: 'Title and department', width: 180, section: 'contactDetails' },
  { key: 'email', label: 'Email Address', shortLabel: 'Email', tooltip: 'Business email address', width: 200, section: 'contactDetails' },
  { key: 'phone', label: 'Phone / WhatsApp Number', shortLabel: 'Phone', tooltip: 'Contact phone number', width: 160, section: 'contactDetails' },
  { key: 'linkedin', label: 'LinkedIn Profile', shortLabel: 'LinkedIn', tooltip: 'LinkedIn URL', width: 200, section: 'contactDetails' },
  { key: 'website', label: 'Website URL', shortLabel: 'Website', tooltip: 'Company website', width: 180, section: 'contactDetails' },
  // Professional Drivers
  { key: 'criteria', label: 'Key Buying Criteria', shortLabel: 'Buying Criteria', tooltip: 'Music Licensing Compliance, Brand-Fit Playlists, Multi-Location Control, Easy Scheduling, Low Cost, Local Music Support, Centralized Reporting, Customer Experience Enhancement', width: 260, section: 'professionalDrivers' },
  { key: 'painPoints', label: 'Key Pain Points', shortLabel: 'Pain Points', tooltip: 'Copyright Risk, Generic Playlists, Manual Music Control, Inconsistent Brand Experience, Limited Arabic Content, High Licensing Complexity, Poor Audio Quality, Lack of Remote Management', width: 260, section: 'professionalDrivers' },
  { key: 'triggers', label: 'Upcoming Triggers and Initiatives', shortLabel: 'Triggers', tooltip: 'New Store Openings, Hotel Renovations, Mall Expansions, Franchise Growth, Brand Refresh Programs, Guest Experience Upgrades, Digital Customer Experience Initiatives', width: 260, section: 'professionalDrivers' },
]

const PREMIUM_EXTRA_COLUMNS: Column[] = [
  // Purchasing Behaviour Metrics
  { key: 'budgetOwner', label: 'Budget Ownership', shortLabel: 'Budget Owner', tooltip: 'Marketing Head, Brand Manager, Operations Manager, Procurement Manager, Hospitality General Manager, Retail Director, IT / Facilities Manager', width: 200, section: 'purchasingBehaviour' },
  { key: 'procurementModel', label: 'Procurement Model', shortLabel: 'Procurement Model', tooltip: 'Direct Subscription, Vendor Contract, System Integrator Partnership, Franchise-Level Agreement, Regional Framework Contract, Project-Based Deployment', width: 220, section: 'purchasingBehaviour' },
  { key: 'engagementType', label: 'Preferred Engagement Type', shortLabel: 'Engagement Type', tooltip: 'Free Trial, Pilot Program, Monthly Subscription, Annual Contract, Multi-Location Rollout, Long-Term Managed Service Agreement', width: 220, section: 'purchasingBehaviour' },
  // Solution Requirements
  { key: 'solutionType', label: 'Preferred Solution Type', shortLabel: 'Solution Type', tooltip: 'Licensed Background Music Service, Branded Radio, Custom Playlist Management, Music-on-Hold, Audio Advertising, Background Music System Integration', width: 240, section: 'solutionRequirements' },
  { key: 'deploymentModel', label: 'Preferred Deployment Model', shortLabel: 'Deployment Model', tooltip: 'Cloud-Based Music Platform, App-Based Control, Centralized Multi-Site Dashboard, On-Site Audio System Integration, Hybrid Remote and On-Premise Setup', width: 240, section: 'solutionRequirements' },
  { key: 'performanceExpectations', label: 'Performance Expectations', shortLabel: 'Performance', tooltip: 'Legal Music Use, Reliable Streaming, Offline Playback, Playlist Customization, Multi-Branch Control, Simple User Interface, Scheduled Daypart Music, Consistent Audio Quality', width: 260, section: 'solutionRequirements' },
  // CMI Insights
  { key: 'benchmarkSummary', label: 'Customer Benchmarking Summary (Potential Customers)', shortLabel: 'Benchmark Summary', tooltip: 'Strategic summary for potential engagement', width: 300, section: 'cmiInsights' },
  { key: 'cmiNotes', label: 'Additional Comments / Notes By CMI Team', shortLabel: 'CMI Notes', tooltip: 'Internal CMI team comments', width: 280, section: 'cmiInsights' },
]

function getColumns(prop: PropositionType): Column[] {
  if (prop === 'premium') return [...BASE_COLUMNS, ...PREMIUM_EXTRA_COLUMNS]
  return BASE_COLUMNS
}

function getSectionGroups(columns: Column[]) {
  const groups: { section: keyof typeof SECTION_COLORS; label: string; count: number }[] = []
  let current: (typeof groups)[0] | null = null

  const SECTION_LABELS: Record<keyof typeof SECTION_COLORS, string> = {
    customerInfo: 'Customer Information',
    contactDetails: 'Contact Details',
    professionalDrivers: 'Professional Drivers',
    purchasingBehaviour: 'Purchasing Behaviour Metrics',
    solutionRequirements: 'Solution Requirements',
    cmiInsights: 'CMI Insights',
  }

  for (const col of columns) {
    if (!current || current.section !== col.section) {
      current = { section: col.section, label: SECTION_LABELS[col.section], count: 1 }
      groups.push(current)
    } else {
      current.count++
    }
  }
  return groups
}

interface TableProps {
  customers: CustomerRecord[]
  proposition: PropositionType
  searchTerm: string
}

function DataTable({ customers, proposition, searchTerm }: TableProps) {
  const columns = useMemo(() => getColumns(proposition), [proposition])
  const sectionGroups = useMemo(() => getSectionGroups(columns), [columns])
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 10

  const filtered = useMemo(() => {
    if (!searchTerm) return customers
    const q = searchTerm.toLowerCase()
    return customers.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.vertical.toLowerCase().includes(q) ||
      c.size.toLowerCase().includes(q) ||
      c.criteria.toLowerCase().includes(q)
    )
  }, [customers, searchTerm])

  const totalPages = Math.ceil(filtered.length / rowsPerPage)
  const pageRows = filtered.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)

  return (
    <div>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full text-xs border-collapse">
          <thead>
            {/* Section header row */}
            <tr>
              <th
                className="border border-gray-300 px-3 py-2 text-center font-bold text-white"
                style={{ backgroundColor: '#374151', minWidth: 50 }}
              >
                S.No.
              </th>
              {sectionGroups.map((grp) => (
                <th
                  key={grp.section}
                  colSpan={grp.count}
                  className="border border-gray-300 px-3 py-2 text-center font-bold whitespace-nowrap"
                  style={{
                    backgroundColor: SECTION_COLORS[grp.section].bg,
                    color: SECTION_COLORS[grp.section].text,
                  }}
                >
                  {grp.label}
                </th>
              ))}
            </tr>
            {/* Column names row */}
            <tr className="bg-gray-50">
              <th className="border border-gray-200 px-3 py-2 text-center font-semibold text-gray-700"></th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  title={col.tooltip}
                  className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700 whitespace-nowrap cursor-help"
                  style={{ minWidth: col.width }}
                >
                  {col.shortLabel}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageRows.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="text-center py-12 text-gray-500">
                  No customers match your search
                </td>
              </tr>
            ) : (
              pageRows.map((customer, idx) => (
                <tr
                  key={customer.sno}
                  className={idx % 2 === 0 ? 'bg-white hover:bg-blue-50' : 'bg-gray-50 hover:bg-blue-50'}
                >
                  <td className="border border-gray-200 px-3 py-2 text-center font-medium text-gray-600">
                    {(currentPage - 1) * rowsPerPage + idx + 1}
                  </td>
                  {columns.map((col) => {
                    const val = customer[col.key] as string
                    return (
                      <td
                        key={col.key}
                        className="border border-gray-200 px-3 py-2 align-top text-gray-800"
                        style={{ maxWidth: col.width, minWidth: Math.min(col.width, 120) }}
                      >
                        <div
                          className="line-clamp-3"
                          title={val}
                          style={{ minWidth: 0 }}
                        >
                          {val || '—'}
                        </div>
                      </td>
                    )
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
          <span>
            Showing {(currentPage - 1) * rowsPerPage + 1}–{Math.min(currentPage * rowsPerPage, filtered.length)} of {filtered.length} customers
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-40"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const PROPOSITIONS: { id: PropositionType; label: string; badge: string; badgeColor: string; desc: string }[] = [
  {
    id: 'basic',
    label: 'Proposition 1 – Basic',
    badge: 'Basic',
    badgeColor: '#2563EB',
    desc: 'Customer profile, contact details, and key professional drivers'
  },
  {
    id: 'advance',
    label: 'Proposition 2 – Advance',
    badge: 'Advance',
    badgeColor: '#059669',
    desc: 'All Basic fields plus full professional driver data with music market context'
  },
  {
    id: 'premium',
    label: 'Proposition 3 – Premium',
    badge: 'Premium',
    badgeColor: '#7C3AED',
    desc: 'Complete profile including purchasing behaviour, solution requirements, and CMI intelligence'
  },
]

export function CustomerDatabaseTables() {
  const [activeProp, setActiveProp] = useState<PropositionType>('basic')
  const [searchTerm, setSearchTerm] = useState('')

  const activeConfig = PROPOSITIONS.find(p => p.id === activeProp)!
  const columnCount = activeProp === 'premium' ? BASE_COLUMNS.length + PREMIUM_EXTRA_COLUMNS.length : BASE_COLUMNS.length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1F3864] to-[#2D5A8E] rounded-lg px-6 py-4 text-white">
        <h2 className="text-xl font-bold">MENA Background Music Market – Customer Database</h2>
        <p className="text-sm text-blue-200 mt-0.5">Verified directory and insight on customers across MENA commercial background music verticals</p>
        <div className="flex gap-4 mt-3 text-xs text-blue-100">
          <span className="bg-white/10 rounded px-2 py-1">{DEMO_CUSTOMERS.length} customers</span>
          <span className="bg-white/10 rounded px-2 py-1">{columnCount} data fields</span>
          <span className="bg-white/10 rounded px-2 py-1">7 MENA markets</span>
        </div>
      </div>

      {/* Proposition Tabs */}
      <div className="flex gap-2 flex-wrap">
        {PROPOSITIONS.map(prop => (
          <button
            key={prop.id}
            onClick={() => setActiveProp(prop.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
              activeProp === prop.id
                ? 'shadow-md text-white border-transparent'
                : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
            style={activeProp === prop.id ? { backgroundColor: prop.badgeColor, borderColor: prop.badgeColor } : {}}
          >
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: activeProp === prop.id ? 'rgba(255,255,255,0.8)' : prop.badgeColor }}
            />
            {prop.label}
          </button>
        ))}
      </div>

      {/* Description bar */}
      <div
        className="rounded-lg px-4 py-3 text-sm text-white"
        style={{ backgroundColor: activeConfig.badgeColor + 'dd' }}
      >
        <span className="font-semibold">{activeConfig.label}:</span> {activeConfig.desc}
        <span className="ml-4 text-white/70">
          {activeProp === 'premium' ? `${BASE_COLUMNS.length + PREMIUM_EXTRA_COLUMNS.length + 1} columns` : `${BASE_COLUMNS.length + 1} columns`}
        </span>
      </div>

      {/* Search bar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search by name, vertical, size..."
            className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <span className="text-sm text-gray-500">
          {searchTerm ? `Filtered results` : `All ${DEMO_CUSTOMERS.length} customers`}
        </span>
      </div>

      {/* Table */}
      <DataTable
        customers={DEMO_CUSTOMERS}
        proposition={activeProp}
        searchTerm={searchTerm}
      />

      {/* Legend */}
      <div className="flex flex-wrap gap-3 text-xs text-gray-600 border-t pt-4">
        {Object.entries({
          customerInfo: 'Customer Information',
          contactDetails: 'Contact Details',
          professionalDrivers: 'Professional Drivers',
          purchasingBehaviour: 'Purchasing Behaviour (Premium)',
          solutionRequirements: 'Solution Requirements (Premium)',
          cmiInsights: 'CMI Insights (Premium)',
        }).map(([key, label]) => (
          <div key={key} className="flex items-center gap-1.5">
            <span
              className="inline-block w-3 h-3 rounded"
              style={{ backgroundColor: SECTION_COLORS[key as keyof typeof SECTION_COLORS].bg }}
            />
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}
