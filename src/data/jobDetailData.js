export const getJobDetailById = id => {
  var result = jobDetailData.filter(function(obj) {
    return obj.jobDetail.jobId == id;
  });
  return result[0].jobDetail;
};

const jobDetailData = [
  {
    jobDetail: {
      jobId: "85969c3b-5818-41d0-8a36-3c9361f11174",
      positionName: "Gerber Operatörü",
      companyName: "Testoğlu Lahmacun Pide Ve Kebap",
      durationDay: 0,
      durationDayText: "Taze çıktı!",
      imageUrl: "https://localhost/bluecollar/company/job/Default/6.jpg",
      countryCode: "TR",
      countryName: "Turkey",
      cityName: "İstanbul",
      townName: "Ümraniye",
      address:
        "Saray Mahallesi Site Yolu Sokak No:7 34768",
      postalCode: 34768,
      hasLatitude: true,
      hasLongitude: true,
      latitude: 41.0266502,
      longitude: 29.1157803,
      description: "açıklama",
      status: 1,
      contactPhone: {
        countryCallingCode: "+90",
        areaCode: "879",
        number: "9797979"
      }
    }
  },
  {
    jobDetail: {
      jobId: "59f82a77-d9c6-43a1-8d62-58b1776a9c51",
      positionName: "Front End Developer",
      companyName: "Alper Ticaret",
      durationDay: 0,
      durationDayText: "",
      imageUrl: "https://localhost/bluecollar/company/job/Default/6.jpg",
      countryCode: "TR",
      countryName: "Turkey",
      cityName: "İstanbul",
      townName: "Üsküdar",
      address:
        "Mimar Sinan Mah. Çavuşdere Cad. No: 35",
      postalCode: 34768,
      hasLatitude: true,
      hasLongitude: true,
      latitude: 41.0266502,
      longitude: 29.1157803,
      description: "Web Geliştirme Uzmanları şirketimizde, HTML5, CSS3, Javascript gibi teknolojileri etkili ve verimli biçimde kullanarak web tabanlı uygulamalar ve internet siteleri için arayüzlerin geliştirilmesinde rol alır",
      status: 1,
      contactPhone: {
        countryCallingCode: "+90",
        areaCode: "555",
        number: "9871234"
      }
    }
  },
  {
    jobDetail: {
      jobId: "2711f175-fb1b-4818-bdf2-2d42985e90a5",
      positionName: "Avukat",
      companyName: "Doğan Hukuk Bürosu",
      durationDay: 0,
      durationDayText: "",
      imageUrl: "https://localhost/bluecollar/company/job/Default/6.jpg",
      countryCode: "TR",
      countryName: "Turkey",
      cityName: "Ankara",
      townName: "Batıkent",
      address:
        "Kent Koop Mah. 1868. Sok. No:15",
      postalCode: 34768,
      hasLatitude: true,
      hasLongitude: true,
      latitude: 41.0266502,
      longitude: 29.1157803,
      description: "Özellikle Ticaret, Borçlar ve Aile Hukuku gibi özel hukuk alanlarında çalışma",
      status: 1,
      contactPhone: {
        countryCallingCode: "+90",
        areaCode: "645",
        number: "7545365"
      }
    }
  }
];
