/**
 * Props para el componente ReservationPDF sin ninguna lógica
 * Contiene todos los datos pre-procesados necesarios para renderizar el PDF
 */
export interface ReservationPDFProps {
  // Información básica de la reserva
  reservation: {
    id: string;
    destinationName: string;
    userName: string;
    nights: number;
    checkIn: string; // Fecha formateada
    checkOut: string; // Fecha formateada
    created: string; // Fecha formateada
    cancellationPolicy: string;
    totalToPay: string;
    total: string;
    totalPaid: number;
    totalEarning: string;
    securityDeposit: string;
    photographyDiscountValue?: string;
    changeType?: number;
  };

  // Información del destino
  destination: {
    city: string;
    country: string;
    guestNumber: number;
  };

  // Detalles financieros pre-calculados
  financialDetails: {
    amount: string; // Monto a pagar
    halfCancellationDaysFormatted: string; // Fecha de pago parcial formateada
    balanceOwed: string; // Saldo pendiente
    serviceFee: string; // Tarifa de servicio
    status: string; // Estado de la factura
  };

  // Costos desglosados para mostrar en la tabla
  guestCosts: Array<{
    name: string;
    detail: string;
    total: string;
  }>;
  ownerCosts: Array<{
    name: string;
    detail: string;
    total: string;
  }>;

  // Detalles de los huéspedes formateados
  guestsDetails: string;

  // Lista de servicios incluidos
  includedServices: string[];

  // Políticas de cancelación
  cancellationPolicies: {
    english: string;
    englishNotes: string;
    spanish: string;
    spanishNotes: string;
  };

  // Traducciones necesarias
  translations: {
    dateCreated: string;
    status: string;
    invoice: string;
    bookingSummary: string;
    guestName: string;
    propertyName: string;
    destination: string;
    country: string;
    arrivalDate: string;
    departureDate: string;
    totalNights: string;
    cancellationPolicy: string;
    cancellationStandard: string;
    guests: string;
    bookingDetails: string;
    cost: string;
    detail: string;
    price: string;
    payment: string;
    earnings: string;
    requested: string;
    balanceDue: string;
    paymentConfirm: string;
    firstPayment: string;
    balanceOwed: string;
    guestPays: string;
    serviceFee: string;
    securityDeposit: string;
    photographyDiscount: string;
    youEarn: string;
    changeType: string;
    notes: string;
    terms: string;
    download: string;

    // Notas para huéspedes
    guestNotes: {
      securityDepositInfo: string;
      servicesInfo: string;
      overCapacity1: string;
      overCapacity2: string;
      overCapacity3: string;
      parties: string;
      pets: string;
      fine: string;
      qa: string;
    };

    // Notas para propietarios
    ownerNotes: {
      securityDepositInfo: string;
      basicServices: string;
      bankInfo: string;
      payPolicy: string;
      cancellationPolicy: string;
      roomDistribution: string;
    };
  };
}
