import React, { useRef, Suspense, useState } from "react";
import { useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';




export default function Test1() {
    const [data, setData] = useState([
        [{ id: "1", name: "rack1" }, { id: "2", name: "asset1" }],
        [{ id: "1", name: "rack2" }, { id: "2", name: "asset2" }],
        [{ id: "1", name: "rack3" }, { id: "2", name: "asset3" }],
        [{ id: "1", name: "rack4" }, { id: "2", name: "asset4" }],
    ])
    return (
        <>
            {
                (data.map((dt, index) => (
                    <p key={index}>rack  : {JSON.stringify(dt)}</p>
                    // (dt.map((ddd, ind) => (
                    //     <p key={ind}>rack : {ddd.name}</p>

                    // )))
                )))
            }

        </>
    );
}
