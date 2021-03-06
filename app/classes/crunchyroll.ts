namespace Crunchyroll {
    export interface HistoryItem {
        playhead: string;
        timestamp: string;
        media: HistoryItemMedia;
        collection: HistoryItemCollection;
        series: HistoryItemSeries;
    }

    interface HistoryItemMedia {
        media_id: string;
        /**
         * Title of the episode.
         */
        name: string;
        episode_number: string;
        /**
         * Timestamp in a string format.
         */
        created: string;
        url: string;
        /**
         * A bunch of URLs for images.
         */
        screenshot_image: {
            thumb_url: string;
        }
    }

    interface HistoryItemCollection {
        class: string;
        collection_id: string;
        etp_guid: string;
        series_id: string;
        series_etp_guid: string;
        /**
         * Name of the anime.
         */
        name: string;
        description: string;
        season: string;
        /**
         * Whether or not the anime is complete; ie all episodes are available in some form.
         */
        complete: boolean;
    }

    interface HistoryItemSeries {
        class: string;
        series_id: string;
        url: string;
        name: string;
        media_type: string;
        landscape_image: {
            thumb_url: string;
            small_url: string;
        };
        description: string;
    }
}