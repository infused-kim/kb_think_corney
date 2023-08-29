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
            (segment (start ${ adjust_point(4.304041, 16.234694) }) (end ${ adjust_point(3.174041, 16.234694) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(6.504041, 29.494694) }) (end ${ adjust_point(6.504041, 18.434694) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(0.224041, 13.284694) }) (end ${ adjust_point(0.224041, -11.615306) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(3.174041, 16.234694) }) (end ${ adjust_point(0.224041, 13.284694) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(6.504041, 18.434694) }) (end ${ adjust_point(4.304041, 16.234694) }) (width 0.25) (layer "F.Cu") (net 1))
            (via (at ${ adjust_point(6.604041, 29.604694) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 1))
            (via (at ${ adjust_point(0.224041, -11.615306) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 1))
            (segment (start ${ adjust_point(0.224041, -11.615306) }) (end ${ adjust_point(0.224041, -12.415306) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(0.194041, -12.445306) }) (end ${ adjust_point(3.014041, -12.445306) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(0.224041, -12.415306) }) (end ${ adjust_point(0.194041, -12.445306) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(-2.445959, -12.445306) }) (end ${ adjust_point(0.194041, -12.445306) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(7.97, 22.4) }) (end ${ adjust_point(7.97, 24.2) }) (width 0.25) (layer "F.Cu") (net 2))
            (segment (start ${ adjust_point(7.97, 26) }) (end ${ adjust_point(7.97, 24.2) }) (width 0.25) (layer "F.Cu") (net 2))
            (via (at ${ adjust_point(7.97, 24.2) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 2))
            (segment (start ${ adjust_point(6.545306, 27.424694) }) (end ${ adjust_point(7.97, 26) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(7.97, 22.4) }) (end ${ adjust_point(7.97, 17.248735) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(7.97, 24.2) }) (end ${ adjust_point(7.97, 22.4) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(0.914041, 27.424694) }) (end ${ adjust_point(6.545306, 27.424694) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(7.97, 17.248735) }) (end ${ adjust_point(8.264041, 16.954694) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(7.97, 24.2) }) (end ${ adjust_point(7.97, 26) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(0.904041, 27.414694) }) (end ${ adjust_point(0.914041, 27.424694) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(-6.445959, 39.624694) }) (end ${ adjust_point(-0.755959, 39.624694) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(-7.645959, 38.424694) }) (end ${ adjust_point(-6.445959, 39.624694) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(5.834041, -8.815306) }) (end ${ adjust_point(4.774041, -7.755306) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(9.41, 22.4) }) (end ${ adjust_point(9.41, 24.2) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(9.41, 22.4) }) (end ${ adjust_point(9.41, -7.519347) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(9.41, 26) }) (end ${ adjust_point(9.41, 24.2195) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(9.41, -7.519347) }) (end ${ adjust_point(8.114041, -8.815306) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(8.114041, -8.815306) }) (end ${ adjust_point(5.834041, -8.815306) }) (width 0.25) (layer "F.Cu") (net 3))
            (via (at ${ adjust_point(9.41, 24.2) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 3))
            (segment (start ${ adjust_point(9.41, 24.2) }) (end ${ adjust_point(9.41, 22.4) }) (width 0.25) (layer "B.Cu") (net 3))
            (segment (start ${ adjust_point(9.41, 24.2) }) (end ${ adjust_point(9.41, 26) }) (width 0.25) (layer "B.Cu") (net 3))
            (segment (start ${ adjust_point(-0.875959, 19.574694) }) (end ${ adjust_point(-0.875959, 28.854694) }) (width 0.25) (layer "F.Cu") (net 4))
            (segment (start ${ adjust_point(0.004041, 18.704694) }) (end ${ adjust_point(-0.875959, 19.574694) }) (width 0.25) (layer "F.Cu") (net 4))
            (segment (start ${ adjust_point(-1.015959, -10.455306) }) (end ${ adjust_point(-1.015959, 13.454694) }) (width 0.25) (layer "F.Cu") (net 13))
            (segment (start ${ adjust_point(3.784041, 18.254694) }) (end ${ adjust_point(3.784041, 26.644694) }) (width 0.25) (layer "F.Cu") (net 13))
            (segment (start ${ adjust_point(-3.265959, -12.695306) }) (end ${ adjust_point(-1.015959, -10.455306) }) (width 0.25) (layer "F.Cu") (net 13))
            (segment (start ${ adjust_point(-1.015959, 13.454694) }) (end ${ adjust_point(3.784041, 18.254694) }) (width 0.25) (layer "F.Cu") (net 13))
            (via (at ${ adjust_point(3.784041, 26.644694) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 13))
            (segment (start ${ adjust_point(-4.185959, 29.864694) }) (end ${ adjust_point(-4.185959, 28.514694) }) (width 0.25) (layer "B.Cu") (net 13))
            (segment (start ${ adjust_point(-2.305959, 26.644694) }) (end ${ adjust_point(3.784041, 26.644694) }) (width 0.25) (layer "B.Cu") (net 13))
            (segment (start ${ adjust_point(-3.135959, 30.914694) }) (end ${ adjust_point(-4.185959, 29.864694) }) (width 0.25) (layer "B.Cu") (net 13))
            (segment (start ${ adjust_point(-4.185959, 28.514694) }) (end ${ adjust_point(-2.305959, 26.644694) }) (width 0.25) (layer "B.Cu") (net 13))
            (segment (start ${ adjust_point(-4.895959, 33.124694) }) (end ${ adjust_point(-5.065959, 33.304694) }) (width 0.25) (layer "F.Cu") (net 14))
            (segment (start ${ adjust_point(1.194041, 16.734694) }) (end ${ adjust_point(1.194041, 19.194694) }) (width 0.25) (layer "F.Cu") (net 14))
            (segment (start ${ adjust_point(-0.125959, 20.524694) }) (end ${ adjust_point(-0.125959, 25.894694) }) (width 0.25) (layer "F.Cu") (net 14))
            (segment (start ${ adjust_point(-4.895959, 25.904694) }) (end ${ adjust_point(-4.895959, 33.124694) }) (width 0.25) (layer "F.Cu") (net 14))
            (segment (start ${ adjust_point(-1.485959, -8.385306) }) (end ${ adjust_point(-1.485959, 14.054694) }) (width 0.25) (layer "F.Cu") (net 14))
            (segment (start ${ adjust_point(-3.265959, -10.155306) }) (end ${ adjust_point(-1.485959, -8.385306) }) (width 0.25) (layer "F.Cu") (net 14))
            (segment (start ${ adjust_point(-1.485959, 14.054694) }) (end ${ adjust_point(1.194041, 16.734694) }) (width 0.25) (layer "F.Cu") (net 14))
            (segment (start ${ adjust_point(1.194041, 19.194694) }) (end ${ adjust_point(-0.125959, 20.524694) }) (width 0.25) (layer "F.Cu") (net 14))
            (via (at ${ adjust_point(-0.125959, 25.894694) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 14))
            (via (at ${ adjust_point(-5.095959, 33.304694) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 14))
            (via (at ${ adjust_point(-4.895959, 25.904694) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 14))
            (segment (start ${ adjust_point(-0.125959, 25.894694) }) (end ${ adjust_point(-4.895959, 25.894694) }) (width 0.25) (layer "B.Cu") (net 14))
            (segment (start ${ adjust_point(-2.095959, 33.304694) }) (end ${ adjust_point(-5.065959, 33.304694) }) (width 0.25) (layer "B.Cu") (net 14))
            (segment (start ${ adjust_point(7.374041, 31.874694) }) (end ${ adjust_point(6.604041, 31.104694) }) (width 0.25) (layer "F.Cu") (net 72))
            (segment (start ${ adjust_point(8.374041, 31.874694) }) (end ${ adjust_point(7.374041, 31.874694) }) (width 0.25) (layer "F.Cu") (net 72))
            (via (at ${ adjust_point(8.374041, 31.874694) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 72))
            (segment (start ${ adjust_point(-7.180306, 40.094694) }) (end ${ adjust_point(3.234694, 40.094694) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(8.82, 41.93) }) (end ${ adjust_point(9.595, 41.155) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(9.595, 37.215653) }) (end ${ adjust_point(8.724041, 36.344694) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(5.07, 41.93) }) (end ${ adjust_point(8.82, 41.93) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(-8.85, 38.425) }) (end ${ adjust_point(-7.180306, 40.094694) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(8.724041, 34.364694) }) (end ${ adjust_point(9.244041, 33.844694) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(8.724041, 36.344694) }) (end ${ adjust_point(8.724041, 34.364694) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(8.374041, 31.874694) }) (end ${ adjust_point(7.334041, 31.874694) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(9.595, 41.155) }) (end ${ adjust_point(9.595, 37.215653) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(3.234694, 40.094694) }) (end ${ adjust_point(5.07, 41.93) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(9.244041, 33.844694) }) (end ${ adjust_point(9.244041, 32.744694) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(9.244041, 32.744694) }) (end ${ adjust_point(8.374041, 31.874694) }) (width 0.25) (layer "B.Cu") (net 72))
            (segment (start ${ adjust_point(7.334041, 31.874694) }) (end ${ adjust_point(6.604041, 32.604694) }) (width 0.25) (layer "B.Cu") (net 72))
        `

        return traces
    }
  }
