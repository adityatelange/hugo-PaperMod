const featuredImageClass = 'image_featured';
const imageScalableClass = 'image-scalable';
const scaleImageClass = 'image-scale';
const pageHasLoaded = 'DOMContentLoaded';
const imageAltClass = 'img_alt';


const defaultSiteLanguage = '{{ partialCached "func/getDefaultLanguage" . }}';
const baseURL = '{{ site.BaseURL }}';
const searchFieldClass = '.search_field';
const searchClass = '.search';
const goBackClass = 'button_back';
const lineClass = '.line';

// defined in i18n / translation files
const quickLinks = '{{ T "quick_links" }}';
const searchResultsLabel = '{{ T "search_results_label" }}';
const shortSearchQuery = '{{ T "short_search_query" }}'
const typeToSearch = '{{ T "type_to_search" }}';
const noMatchesFound = '{{ T "no_matches" }}';
