import VideoInfo from '../classes/video-info';
import { mmHHToSeconds } from '../helpers/time-parsers';

export default class Vrv extends VideoInfo {

    constructor() {
        super("https://www.vrv.co/");
    }

    get episodeNumber(): number {
        try {
            const episodeTitle = document.getElementsByClassName("video-subtitle") as HTMLCollectionOf<HTMLDivElement>;

            if (episodeTitle.length > 0) {
                const tokens = episodeTitle[0].innerText.split(":");
                console.log(tokens);
                return parseInt(episodeTitle[0].innerText);
            } else {
                throw Error("Could not find element");
            }

        } catch (ex) {
            // console.error("Trakt-it: Episode Number");
            // console.error(ex);
            return -1;
        }
    }

    get seasonNumber(): number {
        try {
            const seasonNumber = document.getElementsByClassName("season") as HTMLCollectionOf<HTMLDivElement>;

            if (seasonNumber.length > 0) {
                return parseInt(seasonNumber[0].innerText.replace( /^\D+/g, ''));
            } else {
                throw Error("Could not find element");
            }
        } catch (ex) {
            // console.error("Trakt-it: Season Number");
            // console.error(ex);
            return -1;
        }
    }

    get episodeTitle(): string {
        try {
            const episodeTitle = document.getElementsByClassName("title") as HTMLCollectionOf<HTMLDivElement>;

            if (episodeTitle.length > 0) {
                const tokens = episodeTitle[0].innerText.split("-");
                return tokens[1].trim();
            } else {
                throw Error("Could not find element");
            }
        } catch (ex) {
            // console.error("Trakt-it: Episode Title");
            // console.error(ex);
            return "";
        }
    }

    get seriesName(): string {
        try {
            const seriesTitle = document.getElementsByClassName("series") as HTMLCollectionOf<HTMLDivElement>;

            if (seriesTitle.length > 0) {
                return seriesTitle[0].innerText;
            } else {
                throw Error("Could not find element");
            }
        } catch (ex) {
            // console.error("Trakt-it: Series Name");
            // console.error(ex);
            return "";
        }
    }

    get totalTimeInSeconds(): number {
        try {
            const totalTime = document.getElementsByClassName("vjs-duration-display") as HTMLCollectionOf<HTMLDivElement>;

            if (totalTime.length > 0) {
                return mmHHToSeconds(totalTime[0].innerText);
            } else {
                throw Error("Could not find element");
            }
        } catch (ex) {
            // console.error("Trakt-it: Series Name");
            // console.error(ex);
            return -1;
        }
    }
    get currentTimeInSeconds(): number {
        try {
            const currentTime = document.getElementsByClassName("vjs-current-time-display") as HTMLCollectionOf<HTMLDivElement>;

            if (currentTime.length > 0) {
                return mmHHToSeconds(currentTime[0].innerText);
            } else {
                throw Error("Could not find element");
            }
        } catch (ex) {
            // console.error("Trakt-it: Series Name");
            // console.error(ex);
            return -1;
        }
    }
}