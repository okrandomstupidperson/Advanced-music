let uploadedMusic: number[] = [];

namespace music {
    //% blockId=music_upload block="upload music with ID %id"
    //% id.min=1 id.max=100000000000
    export function MusicUpload(id: number): void {
        uploadedMusic.push(id);
        console.log(`Music ID ${id} uploaded. Total uploads: ${uploadedMusic.length}`);
    }

    //% block
    export function ListUploadedIDs(): string {
        return uploadedMusic.join(", ");
    }

    //% block
    export function ClearUploads(): void {
        uploadedMusic = [];
        console.log("All uploaded music IDs cleared.");
    }
}
