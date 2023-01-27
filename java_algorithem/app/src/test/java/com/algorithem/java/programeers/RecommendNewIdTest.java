package com.algorithem.java.programeers;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("RcommendNewId 클래스")
class RecommendNewIdTest {

    RecommendNewId recommendNewId;

    @BeforeEach
    void setUp() {
        recommendNewId = new RecommendNewId();
    }

    @Test
    @DisplayName("RecommendNewId 테스트")
    void recommendNewIdTest() {
        String given = "...!@BaT#*..y.abcdefghijklm";

        assertThat(recommendNewId.solution(given)).isEqualTo("bat.y.abcdefghi");
    }

    @Test
    @DisplayName("Step1 : 소문자로 치환")
    void replaceLowerCaseTest() {
        String given = "ABCDE";

        assertThat(recommendNewId.replaceLowerCase(given))
                .isEqualTo("abcde");
    }


    @DisplayName("Step2 : 특수문자 제거")
    @Test
    void removeSpecialCharacter() {
        String given = "...!@bat#*..y.abcdefghijklm";

        assertThat(recommendNewId.removeSpecialCharacter(given)).isEqualTo("...bat..y.abcdefghijklm");

    }
}
