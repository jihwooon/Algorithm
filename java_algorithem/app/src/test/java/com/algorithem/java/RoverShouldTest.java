package com.algorithem.java;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.internal.bytebuddy.matcher.ElementMatchers.is;
import static org.junit.jupiter.api.Assertions.*;

@RunWith(JunitPara)
class RoverShouldTest {

    private Rover rover;

    @Before
    public void initialise() {
        rover = new Rover();
    }


    @Test
    public void rotate_right() {
        Rover rover = new Rover();
        assertThat(rover.execute("R"), is("0:0:E"));

    }

}
