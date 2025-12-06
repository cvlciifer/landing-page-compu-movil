import type { NavigationLink, Site } from './types.ts'

export const SITE: Site = {
    author: 'UTEM',
    url: 'https://utem.cl',
    title: 'Ingeniería en Informática - UTEM',
    description: 'Universidad Tecnológica Metropolitana - Ingeniería en Informática. Forma parte de una carrera acreditada por 6 años y conviértete en un profesional integral del área tecnológica.',
    shortDescription: 'Ingeniería en Informática UTEM',
}

export const NavigationLinks: NavigationLink[] = []

export const FooterLinks = []

export const Settings = {
    GoogleAnalytics: {
        enable: false,
        id: '',
    },

    UmamiAnalytics: {
        enable: false,
        dataWebsiteID: '',
    },

    Comment: {
        enable: false,
        giscus: {
            repo: '',
            repoId: '',
            category: '',
            categoryId: '',
            darkThem: 'noborder_gray',
            lightThem: 'light',
        },
    },

    Assets: {
        uploadAssetsToS3: false,
        config: {
            paths: [],
            endpoint: '',
            bucket: '',
            accessKey: '',
            secretAccessKey: '',
            root: '',
        },
    },
}

export const SEO = {
    title: SITE.title,
    description: SITE.description,
    structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'inLanguage': 'en-US',
        '@id': SITE.url,
        'url': SITE.url,
        'name': SITE.title,
        'description': SITE.description,
        'isPartOf': {
            '@type': 'WebSite',
            'url': SITE.url,
            'name': SITE.title,
            'description': SITE.description,
        },
    },
}
