//--------------------------------------------------------
//4" CMU WALL SECTION PROPERTIES
//--------------------------------------------------------
export function cmu_4(grout, rebarSpa){
    if(grout == "Solid"){
        return {A:43.5, I:47.6, S:26.3, r:1.05, wt:52}
    }
    else{
        switch (rebarSpa){
            case 8:
                return {A:43.5, I:47.6, S:26.3, r:1.05, wt:52}
            case 16:
                return {A:31, I:42.9, S:23.7, r:1.09, wt:45}
            case 24:
                return {A:26.7, I:41.3, S:22.8, r:1.16, wt:41}
            case 32:
                return {A:24.5, I:40.5, S:22.3, r:1.19, wt:39}
            case 40:
                return {A:23.2, I:40, S:22.1, r:1.22, wt:38}
            case 48:
                return {A:22.3, I:39.7, S:21.9, r:1.23, wt:38}
            case 56:
                return {A:21.7, I:39.4, S:21.8, r:1.24, wt:37}
            case 64:
                return {A:21.3, I:39.3, S:21.7, r:1.25, wt:36}
            case 72:
                return {A:20.9, I:39.1, S:21.6, r:1.26, wt:35}
        }
    }
}

//--------------------------------------------------------
//6" CMU WALL SECTION PROPERTIES
//--------------------------------------------------------
export function cmu_6(grout, rebarSpa){
    if(grout == "Solid"){
        return {A:67.5, I:178, S:63.3, r:1.62, wt:68}
    }
    else{
        switch (rebarSpa){
            case 8:
                return {A:67.5,I:178,S:63.3, r:1.62, wt:68}
            case 16:
                return {A:46.6, I:155.1, S:55.1, r:1.64, wt:58}
            case 24:
                return {A:39.1, I:146.8, S:52.2, r:1.74, wt:53}
            case 32:
                return {A:35.3, I:142.7, S:50.7, r:1.8, wt:51}
            case 40:
                return {A:33, I:140.2, S:49.9, r:1.84, wt:50}
            case 48:
                return {A:31.5, I:138.6, S:49.3, r:1.86, wt:49}
            case 56:
                return {A:30.5, I:137.4, S:48.9, r:1.88, wt:48}
            case 64:
                return {A:29.6, I:136.5, S:48.5, r:1.9, wt:47}
            case 72:
                return {A:29, I:135.8, S:48.3, r:1.91, wt:46}
        }
    }
}

//--------------------------------------------------------
//8" CMU WALL SECTION PROPERTIES
//--------------------------------------------------------
export function cmu_8(grout, rebarSpa){
    if(grout == "Solid"){
        return {A:91.5, I:443.3, S:116.3, r:2.2, wt:92}
    }
    else{
        switch (rebarSpa){
            case 8:
                return {A:91.5, I:443.3, S:116.3, r:2.2, wt:92}
            case 16:
                return {A:65.8, I:387.1, S:101.5, r:2.43, wt:75}
            case 24:
                return {A:57.7, I:369.4, S:96.9, r:2.53, wt:69}
            case 32:
                return {A:53.7, I:360.5, S:94.6, r:2.59, wt:65}
            case 40:
                return {A:51.2, I:355.2, S:93.2, r:2.63, wt:62}
            case 48:
                return {A:49.6, I:351.7, S:92.2, r:2.66, wt:60}
            case 56:
                return {A:39.1, I:328.7, S:86.2, r:2.54, wt:58}
            case 64:
                return {A:38, I:326.2, S:85.6, r:2.56, wt:57}
            case 72:
                return {A:46.9, I:345.8, S:90.7, r:2.71, wt:56}
        }
    }
}

//--------------------------------------------------------
//10" CMU WALL SECTION PROPERTIES
//--------------------------------------------------------
export function cmu_10(grout, rebarSpa){
    if(grout == "Solid"){
        return { A:115.5, I:891.7, S:185.3, r:2.78, wt:116}
    }
    else{
        switch (rebarSpa){
            case 8:
                return {A:115.5, I:891.7, S:185.3, r:2.78, wt:116}
            case 16:
                return {A:76.2, I:736.8, S:153.1, r:2.69, wt:92}
            case 24:
                return {A:61.8, I:680.1, S:141.3, r:2.86, wt:85}
            case 32:
                return {A:54.6, I:651.8, S:135.4, r:2.96, wt:78}
            case 40:
                return {A:50.3, I:634.8, S:131.9, r:3.03, wt:75}
            case 48:
                return {A:47.4, I:623.4, S:129.5, r:3.07, wt:72}
            case 56:
                return {A:45.3, I:615.3, S:127.9, r:3.11, wt:70}
            case 64:
                return {A:43.8, I:609.2, S:126.6, r:3.14, wt:69}
            case 72:
                return {A:42.6, I:604.5, S:125.6, r:3.16, wt:68}
        }
    }
}

//--------------------------------------------------------
//12" CMU WALL SECTION PROPERTIES
//--------------------------------------------------------
export function cmu_12(grout, rebarSpa){
    if(grout == "Solid"){
        return {A:139.5, I:1571, S:270.3, r:3.36, wt:140}
    }
    else{
        switch (rebarSpa){
            case 8:
                return {A:139.5, I:1571, S:270.3, r:3.36, wt:140}
            case 16:
                return {A:95, I:1262.3, S:217.2, r:3.64, wt:111}
            case 24:
                return {A:72.1, I:1153.3, S:198.4, r:3.39, wt:102}
            case 32:
                return {A:63.1, I:1097.3, S:188.8, r:3.52, wt:93}
            case 40:
                return {A:57.7, I:1063.7, S:183, r:3.6, wt:89}
            case 48:
                return {A:54.1, I:1041.3, S:179.2, r:3.66, wt:85}
            case 56:
                return {A:51.5, I:1025.3, S:176.4, r:3.7, wt:83}
            case 64:
                return {A:49.5, I:1013.4, S:174.3, r:3.73, wt:81}
            case 72:
                return {A:48, I:1004, S:172.7, r:3.76, wt:80}
        }
    }
}
