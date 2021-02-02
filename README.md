# macos-big-sur-terminal

MacOS Big Sur terminal window design including traffic lights, shadows, first command line with actual time and date, and text input effect.
Each design element can be used as an independent element. For each element of window used in different styles (css folder).
Terminal was created for tutorial pages where we need to use command line.

## [GitHub pages](https://boriskrasko.github.io/macos-big-sur-terminal)

My Discord:  [Boris Krasko#8935](https://discordapp.com/users/748253869389250560/)

![inactivity window](https://boriskrasko.github.io/macos-big-sur-terminal/images/macos-traffic-lights-inactive.png)

![activity window](https://boriskrasko.github.io/macos-big-sur-terminal/images/macos-traffic-lights-active.png)


Sample css code for traffic lights
```
:root {
/* Traffic Light Colors */
    --red: #F96057;
    --yellow: #F8CE52;
    --green: #5FCF65;
    --oval: rgba(0, 0, 0, 0.1);
    --inactive: rgba(0, 0, 0, 0.05);
}

.traffic__lights {
    position: absolute;
    width: 52px;
    height: 12px;
    left: 8px;
    top: 8px;
}

.traffic__light, .oval {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    box-sizing: border-box;
    transition: all 0.05s ease-in-out;
}

.traffic__light {
    background: var(--inactive);
}

.oval {
    border: 0.5px solid var(--oval);
}

.close {
    left: 0px;
}

.minimise {
    left: 19.89px;
}

.zoom {
    left: 39.89px;
}

.red {
    background: var(--red);
}

.yellow {
     background: var(--yellow);
}

.green {
     background: var(--green);
}
```

