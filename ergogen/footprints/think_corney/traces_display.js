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
            (segment (start ${ adjust_point(1.320498, 20.044694) }) (end ${ adjust_point(2.534694, 20.044694) }) (width 0.25) (layer "F.Cu") (net 2))
            (via (at ${ adjust_point(1.320498, 20.044694) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 2))
            (segment (start ${ adjust_point(5.393735, -8.275) }) (end ${ adjust_point(4.775, -7.656265) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(8.259972, 14.954694) }) (end ${ adjust_point(9.285, 13.929666) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(2.044041, 14.954694) }) (end ${ adjust_point(8.259972, 14.954694) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(1.320498, 20.044694) }) (end ${ adjust_point(1.320498, 15.678237) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(4.775, -8.893735) }) (end ${ adjust_point(4.775, -9.62) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(4.775, -9.62) }) (end ${ adjust_point(3.262, -11.133) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(1.315192, 20.05) }) (end ${ adjust_point(1.320498, 20.044694) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(8.114986, -8.275) }) (end ${ adjust_point(5.393735, -8.275) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(5.393735, -8.275) }) (end ${ adjust_point(4.775, -8.893735) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(-2.54, 20.05) }) (end ${ adjust_point(1.315192, 20.05) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(4.775, -7.656265) }) (end ${ adjust_point(4.775, -7.08) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(9.285, -7.104986) }) (end ${ adjust_point(8.114986, -8.275) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(3.262, -11.133) }) (end ${ adjust_point(3.262, -12.16) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(9.285, 13.929666) }) (end ${ adjust_point(9.285, -7.104986) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(1.320498, 15.678237) }) (end ${ adjust_point(2.044041, 14.954694) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(0.594041, 14.484694) }) (end ${ adjust_point(8.065292, 14.484694) }) (width 0.25) (layer "B.Cu") (net 4))
            (segment (start ${ adjust_point(8.065292, 14.484694) }) (end ${ adjust_point(8.815, 13.734986) }) (width 0.25) (layer "B.Cu") (net 4))
            (segment (start ${ adjust_point(4.354347, -5.885) }) (end ${ adjust_point(3.264041, -6.975306) }) (width 0.25) (layer "B.Cu") (net 4))
            (segment (start ${ adjust_point(7.964986, -5.885) }) (end ${ adjust_point(4.354347, -5.885) }) (width 0.25) (layer "B.Cu") (net 4))
            (segment (start ${ adjust_point(0, 16.7) }) (end ${ adjust_point(0, 15.078735) }) (width 0.25) (layer "B.Cu") (net 4))
            (segment (start ${ adjust_point(8.815, -5.034986) }) (end ${ adjust_point(7.964986, -5.885) }) (width 0.25) (layer "B.Cu") (net 4))
            (segment (start ${ adjust_point(8.815, 13.734986) }) (end ${ adjust_point(8.815, -5.034986) }) (width 0.25) (layer "B.Cu") (net 4))
            (segment (start ${ adjust_point(0, 15.078735) }) (end ${ adjust_point(0.594041, 14.484694) }) (width 0.25) (layer "B.Cu") (net 4))
            (segment (start ${ adjust_point(-1.955959, -3.233959) }) (end ${ adjust_point(-3.262, -4.54) }) (width 0.25) (layer "F.Cu") (net 15))
            (segment (start ${ adjust_point(-1.345, 14.355653) }) (end ${ adjust_point(-1.955959, 13.744694) }) (width 0.25) (layer "F.Cu") (net 15))
            (segment (start ${ adjust_point(-5.07467, 21.108213) }) (end ${ adjust_point(-2.008213, 21.108213) }) (width 0.25) (layer "F.Cu") (net 15))
            (segment (start ${ adjust_point(-1.345, 20.445) }) (end ${ adjust_point(-1.345, 14.355653) }) (width 0.25) (layer "F.Cu") (net 15))
            (segment (start ${ adjust_point(-5.08, 20.05) }) (end ${ adjust_point(-5.08, 21.102883) }) (width 0.25) (layer "F.Cu") (net 15))
            (segment (start ${ adjust_point(-2.008213, 21.108213) }) (end ${ adjust_point(-1.345, 20.445) }) (width 0.25) (layer "F.Cu") (net 15))
            (segment (start ${ adjust_point(-1.955959, 13.744694) }) (end ${ adjust_point(-1.955959, -3.233959) }) (width 0.25) (layer "F.Cu") (net 15))
            (via (at ${ adjust_point(-5.07467, 21.108213) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 15))
            (segment (start ${ adjust_point(5.377439, 21.729694) }) (end ${ adjust_point(5.829041, 21.278092) }) (width 0.25) (layer "B.Cu") (net 15))
            (segment (start ${ adjust_point(-5.07467, 21.108213) }) (end ${ adjust_point(-4.453189, 21.729694) }) (width 0.25) (layer "B.Cu") (net 15))
            (segment (start ${ adjust_point(5.829041, 20.409694) }) (end ${ adjust_point(5.469347, 20.05) }) (width 0.25) (layer "B.Cu") (net 15))
            (segment (start ${ adjust_point(5.829041, 21.278092) }) (end ${ adjust_point(5.829041, 20.409694) }) (width 0.25) (layer "B.Cu") (net 15))
            (segment (start ${ adjust_point(-4.453189, 21.729694) }) (end ${ adjust_point(5.377439, 21.729694) }) (width 0.25) (layer "B.Cu") (net 15))
            (segment (start ${ adjust_point(-3.805959, 20.054694) }) (end ${ adjust_point(-2.544694, 20.054694) }) (width 0.25) (layer "F.Cu") (net 16))
            (segment (start ${ adjust_point(-3.805959, 15.234694) }) (end ${ adjust_point(-2.425959, 13.854694) }) (width 0.25) (layer "F.Cu") (net 16))
            (segment (start ${ adjust_point(-2.425959, 13.854694) }) (end ${ adjust_point(-2.425959, -1.155306) }) (width 0.25) (layer "F.Cu") (net 16))
            (segment (start ${ adjust_point(-3.805959, 20.054694) }) (end ${ adjust_point(-3.805959, 15.234694) }) (width 0.25) (layer "F.Cu") (net 16))
            (segment (start ${ adjust_point(-2.425959, -1.155306) }) (end ${ adjust_point(-3.265959, -1.995306) }) (width 0.25) (layer "F.Cu") (net 16))
            (via (at ${ adjust_point(-3.805959, 20.054694) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 16))
            (segment (start ${ adjust_point(2.54, 20.05) }) (end ${ adjust_point(1.800306, 20.789694) }) (width 0.25) (layer "B.Cu") (net 16))
            (segment (start ${ adjust_point(-3.805959, 20.374041) }) (end ${ adjust_point(-3.805959, 20.054694) }) (width 0.25) (layer "B.Cu") (net 16))
            (segment (start ${ adjust_point(1.800306, 20.789694) }) (end ${ adjust_point(-3.390306, 20.789694) }) (width 0.25) (layer "B.Cu") (net 16))
            (segment (start ${ adjust_point(-3.390306, 20.789694) }) (end ${ adjust_point(-3.805959, 20.374041) }) (width 0.25) (layer "B.Cu") (net 16))
            (segment (start ${ adjust_point(5.08, 20.05) }) (end ${ adjust_point(5.08, 20.965461) }) (width 0.25) (layer "F.Cu") (net 22))
            (segment (start ${ adjust_point(-6.299502, 20.054694) }) (end ${ adjust_point(-6.299502, 14.902406) }) (width 0.25) (layer "F.Cu") (net 22))
            (segment (start ${ adjust_point(-6.299502, 14.902406) }) (end ${ adjust_point(-4.775959, 13.378863) }) (width 0.25) (layer "F.Cu") (net 22))
            (via (at ${ adjust_point(5.084041, 20.969502) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 22))
            (via (at ${ adjust_point(-6.299502, 20.054694) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 22))
            (segment (start ${ adjust_point(-3.870306, 21.259694) }) (end ${ adjust_point(-5.08, 20.05) }) (width 0.25) (layer "B.Cu") (net 22))
            (segment (start ${ adjust_point(-5.08, 20.05) }) (end ${ adjust_point(-6.294808, 20.05) }) (width 0.25) (layer "B.Cu") (net 22))
            (segment (start ${ adjust_point(5.084041, 20.969502) }) (end ${ adjust_point(4.793849, 21.259694) }) (width 0.25) (layer "B.Cu") (net 22))
            (segment (start ${ adjust_point(4.793849, 21.259694) }) (end ${ adjust_point(-3.870306, 21.259694) }) (width 0.25) (layer "B.Cu") (net 22))
            (segment (start ${ adjust_point(-5.08, 16.7) }) (end ${ adjust_point(-5.08, 19.15) }) (width 0.25) (layer "B.Cu") (net 68))
            (segment (start ${ adjust_point(-2.54, 16.7) }) (end ${ adjust_point(-2.54, 19.15) }) (width 0.25) (layer "B.Cu") (net 69))
            (segment (start ${ adjust_point(2.54, 16.7) }) (end ${ adjust_point(2.54, 19.15) }) (width 0.25) (layer "B.Cu") (net 70))
            (segment (start ${ adjust_point(5.08, 16.7) }) (end ${ adjust_point(5.08, 19.15) }) (width 0.25) (layer "B.Cu") (net 71))
        `

        return traces
    }
  }
