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




// --- ESTILOS DEL PDF ---

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: '#333333',
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingBottom: 5,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: '#1A365D',
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    color: '#718096',
    fontSize: 10,
  },
  heroImage: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    borderRadius: 4,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: '#2B6CB0',
    marginTop: 10,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#CBD5E0',
    paddingBottom: 2,
  },
  paragraph: {
    lineHeight: 1.4,
    marginBottom: 8,
    textAlign: 'justify',
  },
  grid3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  gridImage: {
    width: '32%',
    height: 90,
    objectFit: 'cover',
    borderRadius: 4,
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginVertical: 6,
  },
  badge: {
    backgroundColor: '#EDF2F7',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 3,
    fontSize: 8,
    color: '#4A5568',
  },
  listContainer: {
    marginLeft: 5,
    marginBottom: 8,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  bullet: {
    width: 10,
    fontFamily: 'Helvetica-Bold',
  },
  listText: {
    flex: 1,
    lineHeight: 1.3,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EDF2F7',
    paddingVertical: 4,
  },
  tableLabel: {
    width: '40%',
    fontFamily: 'Helvetica-Bold',
    color: '#4A5568',
  },
  tableValue: {
    width: '60%',
    color: '#2D3748',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#A0AEC0',
    fontSize: 8,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingTop: 5,
  },
});

// --- COMPONENTE PRINCIPAL ---

export const PropertyBrochurePDF: React.FC<BrochureProps> = ({ data }) => {
  return (
    <Document>
      {/* PÁGINA 1: Portada, Descripción e Instalaciones */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.subHeader}>
            <Text>{data.translations.regionLabel}: {data.region}</Text>
            <Text>{data.translations.sleepsLabel}: {data.sleeps}</Text>
          </View>
        </View>

        {data.heroImage && (
          <Image style={styles.heroImage} src={data.heroImage} />
        )}

        <Text style={styles.sectionTitle}>{data.translations.overviewTitle}</Text>
        <Text style={styles.paragraph}>{data.overview}</Text>

        <Text style={styles.sectionTitle}>{data.translations.facilitiesTitle}</Text>
        <View style={styles.badgeContainer}>
          {data.facilities.map((facility, index) => (
            <Text key={index} style={styles.badge}>
              • {facility}
            </Text>
          ))}
        </View>

        <View style={styles.footer} fixed>
          <Text>{data.title}</Text>
          <Text render={({ pageNumber, totalPages }) => `${data.translations.pageLabel} ${pageNumber} / ${totalPages}`} />
        </View>
      </Page>

      {/* PÁGINA 2: Imágenes y Distribución (Interior & Exterior) */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>{data.translations.interiorTitle}</Text>

        {data.images && data.images.length >= 3 && (
          <View style={styles.grid3}>
            <Image style={styles.gridImage} src={data.images[0]} />
            <Image style={styles.gridImage} src={data.images[1]} />
            <Image style={styles.gridImage} src={data.images[2]} />
          </View>
        )}

        <View style={styles.footer} fixed>
          <Text>{data.title}</Text>
          <Text render={({ pageNumber, totalPages }) => `${data.translations.pageLabel} ${pageNumber} / ${totalPages}`} />
        </View>
      </Page>

      {/* PÁGINA 3: Ubicación, Servicios Cercanos y Términos */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>{data.translations.termsTitle}</Text>
        <View style={styles.tableRow}>
          <Text style={styles.tableLabel}>{data.translations.checkInLabel}</Text>
          <Text style={styles.tableValue}>{data.termsAndConditions.checkIn}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableLabel}>{data.translations.checkOutLabel}</Text>
          <Text style={styles.tableValue}>{data.termsAndConditions.checkOut}</Text>
        </View>
        <View style={styles.tableRow}>
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

        <View style={styles.footer} fixed>
          <Text>{data.title}</Text>
          <Text render={({ pageNumber, totalPages }) => `${data.translations.pageLabel} ${pageNumber} / ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
};