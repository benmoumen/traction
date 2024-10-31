const config = {
  frontend: {
    tenantProxyPath: 'http://localhost:8032',
    apiPath: 'api/',
    basePath: '/',
    showDeveloper: true,
    showInnkeeperReservationPassword: true,
    showInnkeeperAdminLogin: true,
    oidc: {
      active: false,
      authority:
        'https://dev.loginproxy.gov.bc.ca/auth/realms/digitaltrust-citz',
      client: 'innkeeper-frontend',
      label: 'IDIR',
    },
    ux: {
      "appTitle": "Credential Management System",
      "appInnkeeperTitle": "Tenant Authorization Console",
      "sidebarTitle": "TRACTION",
      "copyright": "",
      "owner": "",
      "coverImageCopyright": "Photo by Altered Reality on StockSnap",
      "aboutBusiness": {
        "title": "UN Trade & Development",
        "linkTitle": "UNCTAD Digital Government",
        "link": "https://digitalgovernment.world",
        "imageUrl": "/img/unctad/unctad_logo.webp"
      },
    },
  },
  image: {
    buildtime: '',
    tag: 'tenant-ui:default',
    version: 'default',
  },
  server: {
    tractionUrl: 'http://localhost:5100',
  },
};

const plugins = {
  result: [
    'aries_cloudagent.holder',
    'aries_cloudagent.ledger',
    'aries_cloudagent.messaging.credential_definitions',
  ],
};

function setTenantProxyUrl(url: string) {
  config.frontend.tenantProxyPath = url;
}

export default {
  config,
  plugins,
  setTenantProxyUrl,
};
