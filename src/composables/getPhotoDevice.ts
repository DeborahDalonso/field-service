import { Camera, CameraResultType } from '@capacitor/camera';
// import { Filesystem, Directory } from '@capacitor/filesystem';

export function getPhotoDevice() {
    const openGallery = async () => {
        const image = await Camera.pickImages({
            quality: 90,
            limit: 10
        });
    }
    return {
        openGallery
    }
}