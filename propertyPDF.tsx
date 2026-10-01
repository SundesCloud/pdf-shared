import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font, 
} from '@react-pdf/renderer';
import { PropertyData } from './interface';

interface BrochureProps {
  data: PropertyData;
}

// Obtener el origen dinámico si se renderiza en cliente, o usar ruta absoluta/relativa
const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

// Registro de fuentes desde public/fonts utilizando las fuentes variables
Font.register({
  family: 'Playfair',
  fonts: [
    {
      src: `${baseUrl}/fonts/Playfair-Variable.ttf`,
      fontWeight: 'normal', // 400
    },
    {
      src: `${baseUrl}/fonts/Playfair-Variable.ttf`,
      fontWeight: 'bold', // 700
    },
  ],
});

Font.register({
  family: 'Inter',
  fonts: [
    {
      src: `${baseUrl}/fonts/Inter-Variable.ttf`,
      fontWeight: 'normal', // 400
    },
    {
      src: `${baseUrl}/fonts/Inter-Variable.ttf`,
      fontWeight: 'medium', // 500
    },
    {
      src: `${baseUrl}/fonts/Inter-Variable.ttf`,
      fontWeight: 'bold', // 700
    },
  ],
});

const PRIMARY_COLOR = '#1A365D';
const SECONDARY_COLOR = '#2B6CB0';
const TEXT_DARK = '#2D3748';
const TEXT_MUTED = '#718096';
const BG_LIGHT = '#F8FAFC';
const BORDER_COLOR = '#E2E8F0';

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 48,
    paddingHorizontal: 36,
    fontFamily: 'Inter',
    fontSize: 8.5,
    color: TEXT_DARK,
    backgroundColor: '#FFFFFF',
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 1.5,
    borderBottomColor: PRIMARY_COLOR,
    paddingBottom: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Playfair',
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
  },
  subtitle: {
    fontSize: 9,
    color: TEXT_MUTED,
    marginTop: 2,
  },
  keyMetricsRow: {
    flexDirection: 'row',
    backgroundColor: BG_LIGHT,
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
    justify: 'space-around',
    borderWidth: 1,
    borderColor: BORDER_COLOR,
  },
  metricBox: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 6,
  },
  metricLabel: {
    fontSize: 7.5,
    color: TEXT_MUTED,
    textTransform: 'uppercase',
  },
  metricValue: {
    fontSize: 10,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    marginTop: 1,
  },
  heroImage: {
    width: '100%',
    height: 220,
    objectFit: 'cover',
    borderRadius: 4,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'Playfair',
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    marginTop: 10,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
    paddingBottom: 3,
  },
  paragraph: {
    lineHeight: 1.45,
    marginBottom: 10,
    textAlign: 'justify',
    color: TEXT_DARK,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: BG_LIGHT,
    borderRadius: 4,
    padding: 8,
    borderLeftWidth: 3,
    borderLeftColor: SECONDARY_COLOR,
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 8.5,
    fontWeight: 'bold',
    color: SECONDARY_COLOR,
    marginBottom: 4,
  },
  featureItem: {
    fontSize: 7.5,
    color: TEXT_DARK,
    marginBottom: 2,
  },
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginVertical: 8,
  },
  galleryImageHalf: {
    width: '48.5%',
    height: 120,
    objectFit: 'cover',
    borderRadius: 4,
  },
  table: {
    width: '100%',
    marginTop: 6,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 4,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  tableRowAlternate: {
    backgroundColor: BG_LIGHT,
  },
  tableLabel: {
    width: '45%',
    fontFamily: 'Inter',
    fontWeight: 'bold',
    color: TEXT_DARK,
  },
  tableValue: {
    width: '55%',
    color: TEXT_MUTED,
  },
  footer: {
    position: 'absolute',
    bottom: 16,
    left: 36,
    right: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: TEXT_MUTED,
    fontSize: 7.5,
    borderTopWidth: 1,
    borderTopColor: BORDER_COLOR,
    paddingTop: 6,
  },
});

export const PropertyBrochurePDF: React.FC<BrochureProps> = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerBar}>
          <View>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.subtitle}>
              {[data.region, data.country].filter(Boolean).join(', ')}
            </Text>
          </View>
        </View>

        <View style={styles.keyMetricsRow}>
          <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>{data.translations.sleepsLabel}</Text>
            <Text style={styles.metricValue}>{data.sleeps}</Text>
          </View>
          {data.bedroomsCount ? (
            <View style={styles.metricBox}>
              <Text style={styles.metricLabel}>{data.translations.bedroomsLabel}</Text>
              <Text style={styles.metricValue}>{data.bedroomsCount}</Text>
            </View>
          ) : null}
          {data.bathroomsCount ? (
            <View style={styles.metricBox}>
              <Text style={styles.metricLabel}>{data.translations.bathroomsLabel}</Text>
              <Text style={styles.metricValue}>{data.bathroomsCount}</Text>
            </View>
          ) : null}
          {data.priceInfo?.pricePerNight ? (
            <View style={styles.metricBox}>
              <Text style={styles.metricLabel}>{data.translations.priceFromLabel}</Text>
              <Text style={styles.metricValue}>
                ${data.priceInfo.pricePerNight.toLocaleString()} {data.priceInfo.currency}
              </Text>
            </View>
          ) : null}
        </View>

        {data.heroImage ? (
          <Image style={styles.heroImage} src={data.heroImage} />
        ) : null}
        <Text style={styles.sectionTitle}>{data.translations.overviewTitle}</Text>
        <Text style={styles.paragraph}>{data.overview}</Text>

        {data.categorizedFacilities.length > 0 && (
          <View wrap={true}>
            <Text style={styles.sectionTitle}>{data.translations.facilitiesTitle}</Text>
            <View style={styles.categoriesContainer}>
              {data.categorizedFacilities.map((cat, idx) => (
                /* wrap={false} evita que una tarjeta se corte a la mitad entre dos páginas */
                <View key={idx} style={styles.categoryCard} wrap={false}>
                  <Text style={styles.categoryTitle}>{cat.categoryLabel}</Text>
                  {cat.items.map((item, itemIdx) => (
                    <Text key={itemIdx} style={styles.featureItem}>
                      • {item}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          </View>
        )}

        <View style={styles.footer} fixed>
          <Text>{data.title}</Text>
          <Text
            render={({ pageNumber, totalPages }) =>
              `${data.translations.pageLabel} ${pageNumber} / ${totalPages}`
            }
          />
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        {data.images && data.images.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>{data.translations.interiorTitle}</Text>
            <View style={styles.galleryGrid}>
              {data.images.slice(0, 4).map((imgUrl, index) => (
                <Image key={index} style={styles.galleryImageHalf} src={imgUrl} />
              ))}
            </View>
          </>
        )}

        <Text style={styles.sectionTitle}>{data.translations.termsTitle}</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableRowAlternate]}>
            <Text style={styles.tableLabel}>{data.translations.checkInLabel}</Text>
            <Text style={styles.tableValue}>{data.termsAndConditions.checkIn}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>{data.translations.checkOutLabel}</Text>
            <Text style={styles.tableValue}>{data.termsAndConditions.checkOut}</Text>
          </View>
          <View style={[styles.tableRow, styles.tableRowAlternate]}>
            <Text style={styles.tableLabel}>{data.translations.smokingLabel}</Text>
            <Text style={styles.tableValue}>
              {data.termsAndConditions.smokingAllowed ? data.translations.allowed : data.translations.notAllowed}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>{data.translations.suitableForEvents}</Text>
            <Text style={styles.tableValue}>
              {data.termsAndConditions.suitableForEvents ? data.translations.allowed : data.translations.notAllowed}
            </Text>
          </View>
          {data.termsAndConditions.petsAllowed !== undefined && (
            <View style={[styles.tableRow, styles.tableRowAlternate]}>
              <Text style={styles.tableLabel}>{data.translations.petsLabel}</Text>
              <Text style={styles.tableValue}>
                {data.termsAndConditions.petsAllowed ? data.translations.allowed : data.translations.notAllowed}
              </Text>
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};