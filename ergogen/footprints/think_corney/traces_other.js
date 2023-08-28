module.exports = {
    params: {
      designator: 'T',
      variation: 0,
    },
    body: p => {
        const get_at_coordinates = () => {
            const pattern = /\(at (-?[\d\.]*) (-?[\d\.]*) (-?[\d\.]*)\)/;
            const matches = p.at.match(pattern);
            if (matches && matches.length == 4) {
                return [parseFloat(matches[1]), parseFloat(matches[2]), parseFloat(matches[3])];
            } else {
                return null;
            }
        }

        const adjust_point = (x, y) => {
            const at_l = get_at_coordinates();
            if(at_l == null) {
                throw new Error(
                `Could not get x and y coordinates from p.at: ${p.at}`
                );
            }
            const at_x = at_l[0];
            const at_y = at_l[1];
            const at_angle = at_l[2];
            const adj_x = at_x + x;
            const adj_y = at_y + y;

            const radians = (Math.PI / 180) * at_angle,
                cos = Math.cos(radians),
                sin = Math.sin(radians),
                nx = (cos * (adj_x - at_x)) + (sin * (adj_y - at_y)) + at_x,
                ny = (cos * (adj_y - at_y)) - (sin * (adj_x - at_x)) + at_y;

            const point_str = `${nx.toFixed(2)} ${ny.toFixed(2)}`;
            return point_str;
        }

        const traces = `
            (segment (start ${ adjust_point(3.17, 16.23) }) (end ${ adjust_point(0.22, 13.28) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(0.22, 13.28) }) (end ${ adjust_point(0.22, -11.62) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(6.5, 18.430014) }) (end ${ adjust_point(4.299986, 16.23) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(4.299986, 16.23) }) (end ${ adjust_point(3.17, 16.23) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(6.5, 29.495) }) (end ${ adjust_point(6.5, 18.430014) }) (width 0.25) (layer "F.Cu") (net 1))
            (via (at ${ adjust_point(0.22, -11.62) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 1))
            (via (at ${ adjust_point(6.605, 29.6) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 1))
            (segment (start ${ adjust_point(0.22, -11.62) }) (end ${ adjust_point(0.22, -12.415306) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(-2.445959, -12.445306) }) (end ${ adjust_point(0.19, -12.445306) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(0.22, -12.415306) }) (end ${ adjust_point(0.19, -12.445306) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(0.19, -12.445306) }) (end ${ adjust_point(3.014041, -12.445306) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(7.37, 26) }) (end ${ adjust_point(7.37, 24.19) }) (width 0.25) (layer "F.Cu") (net 2))
            (segment (start ${ adjust_point(7.37, 24.19) }) (end ${ adjust_point(7.37, 22.4) }) (width 0.25) (layer "F.Cu") (net 2))
            (via (at ${ adjust_point(7.37, 24.19) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 2))
            (segment (start ${ adjust_point(7.37, 26) }) (end ${ adjust_point(7.37, 24.19) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(4.775, -6.893735) }) (end ${ adjust_point(4.775, -7.62) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(7.37, 22.4) }) (end ${ adjust_point(7.37, 24.19) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(0.904041, 27.414694) }) (end ${ adjust_point(0.909347, 27.42) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(7.37, 17.844666) }) (end ${ adjust_point(8.259972, 16.954694) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(0.909347, 27.42) }) (end ${ adjust_point(6.24, 27.42) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(6.24, 27.42) }) (end ${ adjust_point(7.37, 26.29) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(7.37, 22.4) }) (end ${ adjust_point(7.37, 17.844666) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(4.775, -5.656265) }) (end ${ adjust_point(4.775, -5.08) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(-6.450306, 39.624694) }) (end ${ adjust_point(-0.755959, 39.624694) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(-7.65, 38.425) }) (end ${ adjust_point(-6.450306, 39.624694) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(5.832096, -8.815) }) (end ${ adjust_point(4.775, -7.757904) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(8.81, 24.21) }) (end ${ adjust_point(8.79, 24.19) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(8.79, 24.19) }) (end ${ adjust_point(8.79, 22.42) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(8.815, 22.395) }) (end ${ adjust_point(8.815, -8.114986) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(8.815, -8.114986) }) (end ${ adjust_point(8.114986, -8.815) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(8.114986, -8.815) }) (end ${ adjust_point(5.832096, -8.815) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(8.81, 26) }) (end ${ adjust_point(8.81, 24.21) }) (width 0.25) (layer "F.Cu") (net 3))
            (via (at ${ adjust_point(8.79, 24.19) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 3))
            (segment (start ${ adjust_point(8.81, 22.4) }) (end ${ adjust_point(8.81, 24.17) }) (width 0.25) (layer "B.Cu") (net 3))
            (segment (start ${ adjust_point(8.81, 26) }) (end ${ adjust_point(8.81, 24.21) }) (width 0.25) (layer "B.Cu") (net 3))
            (segment (start ${ adjust_point(0, 18.7) }) (end ${ adjust_point(-0.875, 19.575) }) (width 0.25) (layer "F.Cu") (net 4))
            (segment (start ${ adjust_point(-0.875, 19.575) }) (end ${ adjust_point(-0.875, 28.85) }) (width 0.25) (layer "F.Cu") (net 4))
            (segment (start ${ adjust_point(3.78, 18.250014) }) (end ${ adjust_point(3.78, 26.64) }) (width 0.25) (layer "F.Cu") (net 13))
            (segment (start ${ adjust_point(-3.262, -12.7) }) (end ${ adjust_point(-1.015959, -10.453959) }) (width 0.25) (layer "F.Cu") (net 13))
            (segment (start ${ adjust_point(-1.015959, -10.453959) }) (end ${ adjust_point(-1.015959, 13.454055) }) (width 0.25) (layer "F.Cu") (net 13))
            (segment (start ${ adjust_point(-1.015959, 13.454055) }) (end ${ adjust_point(3.78, 18.250014) }) (width 0.25) (layer "F.Cu") (net 13))
            (via (at ${ adjust_point(3.78, 26.64) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 13))
            (segment (start ${ adjust_point(-4.1825, 29.8675) }) (end ${ adjust_point(-4.1825, 28.5125) }) (width 0.25) (layer "B.Cu") (net 13))
            (segment (start ${ adjust_point(-3.1375, 30.9125) }) (end ${ adjust_point(-4.1825, 29.8675) }) (width 0.25) (layer "B.Cu") (net 13))
            (segment (start ${ adjust_point(-2.31, 26.64) }) (end ${ adjust_point(3.78, 26.64) }) (width 0.25) (layer "B.Cu") (net 13))
            (segment (start ${ adjust_point(-4.1825, 28.5125) }) (end ${ adjust_point(-2.31, 26.64) }) (width 0.25) (layer "B.Cu") (net 13))
            (segment (start ${ adjust_point(-4.9, 25.9) }) (end ${ adjust_point(-4.9, 33.129541) }) (width 0.25) (layer "F.Cu") (net 14))
            (segment (start ${ adjust_point(-1.485959, -8.383959) }) (end ${ adjust_point(-1.485959, 14.05) }) (width 0.25) (layer "F.Cu") (net 14))
            (segment (start ${ adjust_point(-3.262, -10.16) }) (end ${ adjust_point(-1.485959, -8.383959) }) (width 0.25) (layer "F.Cu") (net 14))
            (segment (start ${ adjust_point(1.195, 16.730959) }) (end ${ adjust_point(1.195, 19.194986) }) (width 0.25) (layer "F.Cu") (net 14))
            (segment (start ${ adjust_point(-1.485959, 14.05) }) (end ${ adjust_point(1.195, 16.730959) }) (width 0.25) (layer "F.Cu") (net 14))
            (segment (start ${ adjust_point(-4.9, 33.129541) }) (end ${ adjust_point(-5.070459, 33.3) }) (width 0.25) (layer "F.Cu") (net 14))
            (segment (start ${ adjust_point(1.195, 19.194986) }) (end ${ adjust_point(-0.1305, 20.520486) }) (width 0.25) (layer "F.Cu") (net 14))
            (segment (start ${ adjust_point(-0.1305, 20.520486) }) (end ${ adjust_point(-0.1305, 25.8955) }) (width 0.25) (layer "F.Cu") (net 14))
            (via (at ${ adjust_point(-5.1, 33.3) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 14))
            (via (at ${ adjust_point(-4.9, 25.9) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 14))
            (via (at ${ adjust_point(-0.1305, 25.8955) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 14))
            (segment (start ${ adjust_point(-0.1305, 25.8955) }) (end ${ adjust_point(-4.8955, 25.8955) }) (width 0.25) (layer "B.Cu") (net 14))
            (segment (start ${ adjust_point(-2.095959, 33.304694) }) (end ${ adjust_point(-5.065765, 33.304694) }) (width 0.25) (layer "B.Cu") (net 14))
            (segment (start ${ adjust_point(8.37, 31.87) }) (end ${ adjust_point(7.375, 31.87) }) (width 0.25) (layer "F.Cu") (net 72))
            (segment (start ${ adjust_point(7.375, 31.87) }) (end ${ adjust_point(6.605, 31.1) }) (width 0.25) (layer "F.Cu") (net 72))
            (via (at ${ adjust_point(8.37, 31.87) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 72))
            (segment (start ${ adjust_point(9.24, 33.84) }) (end ${ adjust_point(9.24, 32.74) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(8.72, 36.345) }) (end ${ adjust_point(8.72, 34.36) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(-7.180306, 40.094694) }) (end ${ adjust_point(4.170451, 40.094694) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(4.920757, 40.845) }) (end ${ adjust_point(8.221331, 40.845) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(9.65, 37.275) }) (end ${ adjust_point(8.72, 36.345) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(8.37, 31.87) }) (end ${ adjust_point(7.335, 31.87) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(7.335, 31.87) }) (end ${ adjust_point(6.605, 32.6) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(4.170451, 40.094694) }) (end ${ adjust_point(4.920757, 40.845) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(9.65, 39.416331) }) (end ${ adjust_point(9.65, 37.275) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(-8.85, 38.425) }) (end ${ adjust_point(-7.180306, 40.094694) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(9.24, 32.74) }) (end ${ adjust_point(8.37, 31.87) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(8.221331, 40.845) }) (end ${ adjust_point(9.65, 39.416331) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(8.72, 34.36) }) (end ${ adjust_point(9.24, 33.84) }) (width 0.25) (layer "B.Cu") (net 72))
        `

        return traces
    }
  }
