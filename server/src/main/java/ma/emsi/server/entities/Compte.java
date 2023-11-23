package ma.emsi.server.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ma.emsi.server.enums.Roles;

import java.util.UUID;

/**
 * @author BarkouchMourad
 **/
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public abstract class Compte {
    @Id
    private String EMAIL;
    private String passwd;
    private Roles role;

}
