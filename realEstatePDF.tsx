import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font,
  Svg,
  Path,
  Circle,
  Rect,
} from '@react-pdf/renderer'
import { RealEstateBrochureData } from './interface'

// Obtener el origen dinámico si se renderiza en cliente, o usar ruta relativa/absoluta
const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''

// Registro estandarizado de fuentes desde public/fonts
Font.register({
  family: 'Inter',
  fonts: [
    {
      src: `${baseUrl}/fonts/Inter-Variable.ttf`,
      fontWeight: 'normal',
    },
    {
      src: `${baseUrl}/fonts/Inter-Variable.ttf`,
      fontWeight: 'medium',
    },
    {
      src: `${baseUrl}/fonts/Inter-Variable.ttf`,
      fontWeight: 'bold',
    },
  ],
})

Font.register({
  family: 'Lato',
  fonts: [
    {
      src: `${baseUrl}/fonts/Lato-Regular.ttf`,
      fontWeight: 'normal',
    },
    {
      src: `${baseUrl}/fonts/Lato-Bold.ttf`,
      fontWeight: 'bold',
    },
    {
      src: `${baseUrl}/fonts/Lato-Light.ttf`,
      fontWeight: 'light',
    },
  ],
})

const PRIMARY_COLOR = '#131516'
const SECONDARY_COLOR = '#0F4C75'
const TEXT_DARK = '#373D3F'
const TEXT_MUTED = '#6F7C80'
const BG_LIGHT = '#F0F0F0'
const BORDER_COLOR = '#DADEDF'

const styles = StyleSheet.create({
  page: {
    paddingTop: 34,
    paddingBottom: 42,
    paddingHorizontal: 30,
    fontFamily: 'Lato',
    fontSize: 8.5,
    color: TEXT_DARK,
    backgroundColor: '#FFFFFF',
  },
  // Logo centrado horizontalmente
  // Logos centrados y más grandes
  logoCover: {
    width: 190,
    height: 50,
    objectFit: 'contain',
    alignSelf: 'center',
    marginBottom: 14,
  },
  logoHeader: {
    width: 150,
    height: 40,
    objectFit: 'contain',
    alignSelf: 'center',
    marginBottom: 10,
  },
  coverContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  coverTop: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },
  coverMainImage: {
    width: '62%',
    height: 300,
    objectFit: 'cover',
    borderRadius: 4,
  },
  coverSideImages: {
    width: '38%',
    height: 300,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  coverSideImage: {
    width: '100%',
    height: 145,
    objectFit: 'cover',
    borderRadius: 4,
  },
  coverInfo: {
    marginTop: 6,
  },
  eyebrow: {
    color: SECONDARY_COLOR,
    fontSize: 8.5,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 3,
  },
  title: {
    color: PRIMARY_COLOR,
    fontSize: 20,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    lineHeight: 1.15,
    marginBottom: 3,
  },
  location: {
    color: TEXT_MUTED,
    fontSize: 9.5,
    fontFamily: 'Lato',
    marginBottom: 12,
  },
  coverDetailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopWidth: 1,
    borderTopColor: BORDER_COLOR,
    paddingTop: 10,
    gap: 8,
  },
  coverDetailItem: {
    width: '48.5%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: BG_LIGHT,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
  },
  // Contenedor circular del ícono
  iconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: BORDER_COLOR,
  },
  coverDetailContent: {
    flex: 1,
  },
  coverDetailLabel: {
    color: TEXT_MUTED,
    fontSize: 7.5,
    fontFamily: 'Lato',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  coverDetailValue: {
    color: PRIMARY_COLOR,
    fontSize: 9.5,
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
  // Cabecera: logo centrado arriba, título alineado a la izquierda
  pageHeader: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottomWidth: 1.5,
    borderBottomColor: PRIMARY_COLOR,
    paddingBottom: 8,
    marginBottom: 14,
  },
  pageHeaderTitle: {
    color: PRIMARY_COLOR,
    fontSize: 14,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    marginTop: 6,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
    paddingBottom: 3,
    letterSpacing: 0.2,
    textTransform: 'uppercase',
  },
  paragraph: {
    fontFamily: 'Lato',
    fontSize: 9,
    lineHeight: 1.45,
    marginBottom: 10,
    textAlign: 'left',
    color: TEXT_DARK,
  },
  specificationGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  specification: {
    width: '48.5%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: BG_LIGHT,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
  },
  specificationLabel: {
    color: TEXT_MUTED,
    fontSize: 7.5,
    fontFamily: 'Lato',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  specificationValue: {
    color: PRIMARY_COLOR,
    fontSize: 9.5,
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
  financial: {
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 4,
    overflow: 'hidden',
  },
  financialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
    backgroundColor: '#FFFFFF',
  },
  financialRowAlternate: {
    backgroundColor: BG_LIGHT,
  },
  financialLabel: {
    color: TEXT_MUTED,
    fontFamily: 'Lato',
    fontSize: 8.5,
    textTransform: 'uppercase',
  },
  financialValue: {
    color: PRIMARY_COLOR,
    fontFamily: 'Lato',
    fontSize: 9.5,
    fontWeight: 'bold',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  category: {
    width: '48.5%',
    padding: 8,
    backgroundColor: BG_LIGHT,
    borderRadius: 4,
    borderLeftWidth: 3,
    borderLeftColor: SECONDARY_COLOR,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
  },
  categoryTitle: {
    color: SECONDARY_COLOR,
    fontSize: 8.5,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  feature: {
    color: TEXT_DARK,
    fontSize: 7.5,
    fontFamily: 'Lato',
    lineHeight: 1.35,
    marginBottom: 2,
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginVertical: 8,
  },
  galleryImage: {
    width: '48.5%',
    height: 170,
    objectFit: 'cover',
    borderRadius: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 16,
    left: 30,
    right: 30,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: BORDER_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: TEXT_MUTED,
    fontFamily: 'Lato',
    fontSize: 7.5,
  },
  galleryImageFull: {
    width: '100%',
    height: 220,
    objectFit: 'cover',
    borderRadius: 4,
  },
  mapImage: {
    width: '100%',
    height: 150,
    objectFit: 'cover',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    marginBottom: 8,
  },
})

/* ------------------------------------------------------------------ */
/* Íconos vectoriales (estilo línea, trazo uniforme, 24x24)            */
/* ------------------------------------------------------------------ */

const STROKE = {
  stroke: SECONDARY_COLOR,
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  fill: 'none',
} as const

const IconBase = ({ children }: { children: React.ReactNode }) => (
  <Svg viewBox="0 0 24 24" width={13} height={13}>
    {children}
  </Svg>
)

// Precio: etiqueta
const PriceIcon = () => (
  <IconBase>
    <Path
      d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
      {...STROKE}
    />
    <Circle cx="7.5" cy="7.5" r="1" fill={SECONDARY_COLOR} />
  </IconBase>
)

// Dormitorios: cama
const BedIcon = () => (
  <IconBase>
    <Path d="M2 4v16" {...STROKE} />
    <Path d="M2 8h18a2 2 0 0 1 2 2v10" {...STROKE} />
    <Path d="M2 17h20" {...STROKE} />
    <Path d="M6 8v9" {...STROKE} />
  </IconBase>
)

// Baños: tina
const BathIcon = () => (
  <IconBase>
    <Path d="M9 6 7.62 4.62A2.12 2.12 0 0 0 4 6.12V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" {...STROKE} />
    <Path d="M2 12h20" {...STROKE} />
    <Path d="M7 19v2" {...STROKE} />
    <Path d="M17 19v2" {...STROKE} />
    <Path d="M10 4 8 6" {...STROKE} />
  </IconBase>
)

// Superficie total / terreno: flechas de escala
const LandAreaIcon = () => (
  <IconBase>
    <Path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" {...STROKE} />
    <Path d="M14 15H9v-5" {...STROKE} />
    <Path d="M16 3h5v5" {...STROKE} />
    <Path d="M21 3 9 15" {...STROKE} />
  </IconBase>
)

// Superficie construida: casa
const HomeIcon = () => (
  <IconBase>
    <Path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" {...STROKE} />
    <Path
      d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      {...STROKE}
    />
  </IconBase>
)

// Estacionamientos: auto
const CarIcon = () => (
  <IconBase>
    <Path
      d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
      {...STROKE}
    />
    <Circle cx="7" cy="17" r="2" {...STROKE} />
    <Circle cx="17" cy="17" r="2" {...STROKE} />
    <Path d="M9 17h6" {...STROKE} />
  </IconBase>
)

// Bodegas: caja
const StorageIcon = () => (
  <IconBase>
    <Path
      d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
      {...STROKE}
    />
    <Path d="M12 22V12" {...STROKE} />
    <Path d="m3.3 7 8.7 5 8.7-5" {...STROKE} />
    <Path d="m7.5 4.27 9 5.15" {...STROKE} />
  </IconBase>
)

// Terraza: sol
const TerraceIcon = () => (
  <IconBase>
    <Circle cx="12" cy="12" r="4" {...STROKE} />
    <Path d="M12 2v2" {...STROKE} />
    <Path d="M12 20v2" {...STROKE} />
    <Path d="m4.93 4.93 1.41 1.41" {...STROKE} />
    <Path d="m17.66 17.66 1.41 1.41" {...STROKE} />
    <Path d="M2 12h2" {...STROKE} />
    <Path d="M20 12h2" {...STROKE} />
    <Path d="m6.34 17.66-1.41 1.41" {...STROKE} />
    <Path d="m19.07 4.93-1.41 1.41" {...STROKE} />
  </IconBase>
)

// Piso (nivel en que se ubica): edificio
const BuildingIcon = () => (
  <IconBase>
    <Path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" {...STROKE} />
    <Path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" {...STROKE} />
    <Path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" {...STROKE} />
    <Path d="M10 6h4" {...STROKE} />
    <Path d="M10 10h4" {...STROKE} />
    <Path d="M10 14h4" {...STROKE} />
    <Path d="M10 18h4" {...STROKE} />
  </IconBase>
)

// Pisos (cantidad de niveles): capas
const LayersIcon = () => (
  <IconBase>
    <Path
      d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
      {...STROKE}
    />
    <Path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" {...STROKE} />
    <Path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" {...STROKE} />
  </IconBase>
)

// Antigüedad: calendario
const CalendarIcon = () => (
  <IconBase>
    <Rect x="3" y="4" width="18" height="18" rx="2" {...STROKE} />
    <Path d="M16 2v4" {...STROKE} />
    <Path d="M8 2v4" {...STROKE} />
    <Path d="M3 10h18" {...STROKE} />
  </IconBase>
)

// Orientación: brújula
const CompassIcon = () => (
  <IconBase>
    <Circle cx="12" cy="12" r="10" {...STROKE} />
    <Path
      d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
      {...STROKE}
    />
  </IconBase>
)

// Por defecto: info
const DefaultIcon = () => (
  <IconBase>
    <Circle cx="12" cy="12" r="10" {...STROKE} />
    <Path d="M12 16v-4" {...STROKE} />
    <Path d="M12 8h.01" {...STROKE} />
  </IconBase>
)

// Normaliza (minúsculas y sin tildes) para comparar etiquetas de forma robusta
const normalize = (value: string) =>
  value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

const getIconForLabel = (label: string) => {
  const l = normalize(label)
  if (l.includes('precio') || l.includes('price')) return <PriceIcon />
  if (l.includes('dormitorio') || l.includes('habitacion') || l.includes('bed')) return <BedIcon />
  if (l.includes('bano') || l.includes('bath')) return <BathIcon />
  if (l.includes('construida') || l.includes('built')) return <HomeIcon />
  if (l.includes('superficie') || l.includes('terreno') || l.includes('m2') || l.includes('area')) return <LandAreaIcon />
  if (l.includes('estacionamiento') || l.includes('parking')) return <CarIcon />
  if (l.includes('bodega') || l.includes('storage')) return <StorageIcon />
  if (l.includes('terraza') || l.includes('terrace')) return <TerraceIcon />
  if (l.includes('pisos') || l.includes('niveles') || l.includes('floors')) return <LayersIcon />
  if (l.includes('piso') || l.includes('floor')) return <BuildingIcon />
  if (l.includes('antiguedad') || l.includes('ano') || l.includes('age')) return <CalendarIcon />
  if (l.includes('orientacion') || l.includes('orientation')) return <CompassIcon />
  return <DefaultIcon />
}

const Footer = ({ date }: { date: string }) => (
  <View style={styles.footer} fixed>
    <Text>Sundes Real Estate</Text>
    <Text
      render={({ pageNumber, totalPages }) => `${date}  ·  ${pageNumber}/${totalPages}`}
    />
  </View>
)

export const RealEstateBrochurePDF = ({ data }: { data: RealEstateBrochureData }) => (
  <Document>
    {/* Página 1: Portada */}
    <Page size="A4" style={styles.page}>
      <View style={styles.coverContainer}>
        <View>
          <Image src="/images/logos/sundes-negro.svg" style={styles.logoCover} />
          {data.heroImage || (data.images && data.images.length > 0) ? (
            <View style={styles.coverTop}>
              {data.heroImage ? (
                <Image src={data.heroImage} style={styles.coverMainImage} />
              ) : null}
              {data.images && data.images.length > 0 ? (
                <View style={styles.coverSideImages}>
                  {data.images.slice(0, 2).map((img, idx) => (
                    <Image key={`cover-side-${idx}`} src={img} style={styles.coverSideImage} />
                  ))}
                </View>
              ) : null}
            </View>
          ) : null}

          <View style={styles.coverInfo}>
            <Text style={styles.eyebrow}>{data.operation} · {data.propertyType}</Text>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.location}>{data.location}</Text>

            <View style={styles.coverDetailsGrid}>
              <View style={styles.coverDetailItem}>
                <View style={styles.iconContainer}><PriceIcon /></View>
                <View style={styles.coverDetailContent}>
                  <Text style={styles.coverDetailLabel}>{data.labels.price}</Text>
                  <Text style={styles.coverDetailValue}>{data.financial.price}</Text>
                </View>
              </View>
              {data.specifications.slice(0, 5).map((spec) => (
                <View key={spec.label} style={styles.coverDetailItem}>
                  <View style={styles.iconContainer}>{getIconForLabel(spec.label)}</View>
                  <View style={styles.coverDetailContent}>
                    <Text style={styles.coverDetailLabel}>{spec.label}</Text>
                    <Text style={styles.coverDetailValue}>{spec.value}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
      <Footer date={data.downloadDate} />
    </Page>

    {/* Página 2: Descripción, Especificaciones y Financiero */}
    <Page size="A4" style={styles.page}>
      <View style={styles.pageHeader}>
        <Image src="/images/logos/sundes-negro.svg" style={styles.logoHeader} />
        <Text style={styles.pageHeaderTitle}>{data.labels.overview}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.paragraph}>{data.overview}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle} minPresenceAhead={70}>{data.labels.specifications}</Text>
        <View style={styles.specificationGrid}>
          {data.specifications.map((specification) => (
            <View key={specification.label} style={styles.specification}>
              <View style={styles.iconContainer}>{getIconForLabel(specification.label)}</View>
              <View style={styles.coverDetailContent}>
                <Text style={styles.specificationLabel}>{specification.label}</Text>
                <Text style={styles.specificationValue}>{specification.value}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {data.mapImage ? (
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle} minPresenceAhead={70}>{data.labels.mapTitle || 'Ubicación'}</Text>
          <Image style={styles.mapImage} src={data.mapImage} />
        </View>
      ) : null}

      <View style={styles.section}>
        <Text style={styles.sectionTitle} minPresenceAhead={70}>{data.labels.financial}</Text>
        <View style={styles.financial}>
          <View style={[styles.financialRow, styles.financialRowAlternate]}>
            <Text style={styles.financialLabel}>{data.labels.price}</Text>
            <Text style={styles.financialValue}>{data.financial.price}</Text>
          </View>
          {data.financial.commonExpenses ? (
            <View style={styles.financialRow}>
              <Text style={styles.financialLabel}>{data.labels.commonExpenses}</Text>
              <Text style={styles.financialValue}>{data.financial.commonExpenses}</Text>
            </View>
          ) : null}
          {data.financial.tax ? (
            <View style={[styles.financialRow, styles.financialRowAlternate]}>
              <Text style={styles.financialLabel}>{data.labels.tax}</Text>
              <Text style={styles.financialValue}>{data.financial.tax}</Text>
            </View>
          ) : null}
        </View>
      </View>

      {data.features.length > 0 ? (
        <View style={styles.section}>
          <Text style={styles.sectionTitle} minPresenceAhead={70}>{data.labels.features}</Text>
          <View style={styles.categoryGrid}>
            {data.features.map((category) => (
              <View key={category.categoryLabel} style={styles.category} wrap={false}>
                <Text style={styles.categoryTitle}>{category.categoryLabel}</Text>
                {category.items.map((item) => (
                  <Text key={item} style={styles.feature}>• {item}</Text>
                ))}
              </View>
            ))}
          </View>
        </View>
      ) : null}

      <Footer date={data.downloadDate} />
    </Page>

    {/* Página 3: Galería */}
    {data.images.length > 0 ? (
      <Page size="A4" style={styles.page}>
        <View style={styles.pageHeader}>
          <Image src="/images/logos/sundes-negro.svg" style={styles.logoHeader} />
          <Text style={styles.pageHeaderTitle}>{data.labels.gallery}</Text>
        </View>
        <View style={styles.gallery}>
          {data.images.map((image, index) => (
            <Image
              key={`${image}-${index}`}
              src={image}
              style={
                index === data.images.length - 1 && data.images.length % 2 === 1
                  ? styles.galleryImageFull
                  : styles.galleryImage
              }
            />
          ))}
        </View>
        <Footer date={data.downloadDate} />
      </Page>
    ) : null}
  </Document>
)